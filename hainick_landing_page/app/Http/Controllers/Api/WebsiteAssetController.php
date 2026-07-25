<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ConvertsToWebp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WebsiteAssetController extends Controller
{
    use ConvertsToWebp;

    // GET /hainickkreatif/hainick-assets
    public function index()
    {
        $result = DB::table('website_assets')->get();
        return response()->json($result, 200);
    }

    // POST /hainickkreatif/create-hainick-assets
    // POST /api/create-hainick-assets
    public function store(Request $request)
    {
        $imageType = $request->input('image_type');
        if (! $imageType) {
            return response()->json(['error' => 'Tipe aset harus diisi'], 400);
        }
        if (! $request->hasFile('image_url')) {
            return response()->json(['error' => 'File harus diunggah'], 400);
        }

        $file = $request->file('image_url');
        $mimeType = $file->getMimeType();
        $path = '';

        // CEK TIPE FILE: Gambar atau Video?
        if (str_starts_with($mimeType, 'image/')) {
            // Jika gambar, convert ke WebP
            $path = $this->convertToWebp($file);
        } else {
            // Jika video (atau file lain), langsung simpan aslinya
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $storedPath = $file->storeAs('uploads', $filename, 'public');
            $path = '/storage/' . $storedPath;
        }

        DB::table('website_assets')->insertGetId([
            'image_type' => $imageType,
            'image_url' => $path,
        ]);

        return response()->json([
            'message' => 'Hainick asset berhasil ditambahkan',
            'imagetype' => $imageType,
            'imageUrl' => $path,
        ], 201);
    }


    // PUT /api/update-hainick-assets/{image_type}
    public function update(Request $request, string $imageType)
    {
        if (! $request->hasFile('image_url')) {
            return response()->json(['error' => 'File harus diunggah'], 400);
        }

        $file = $request->file('image_url');
        $mimeType = $file->getMimeType();
        $path = '';

        // LOGIKA YANG SAMA UNTUK UPDATE
        if (str_starts_with($mimeType, 'image/')) {
            $path = $this->convertToWebp($file);
        } else {
            $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $storedPath = $file->storeAs('uploads', $filename, 'public');
            $path = '/storage/' . $storedPath;
        }

        $affected = DB::table('website_assets')
            ->where('image_type', $imageType)
            ->update(['image_url' => $path]);

        if ($affected === 0) {
            return response()->json(['error' => 'Aset tidak ditemukan'], 404);
        }

        return response()->json([
            'message' => 'Hainick asset berhasil diperbarui',
            'imageUrl' => $path,
        ], 200);
    }

    // DELETE /hainickkreatif/delete-hainick-assets/{image_type}
    public function destroy(string $imageType)
    {
        DB::table('website_assets')->where('image_type', $imageType)->delete();
        return response()->json(['message' => 'Hainick update berhasil dihapus'], 200);
    }
}
