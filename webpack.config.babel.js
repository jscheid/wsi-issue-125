import webpack from "webpack";
import SriPlugin from "webpack-subresource-integrity";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import zlib from "zlib";

export default {
  mode: "production",
  entry: {
    index: "./index.js",
  },
  output: {
    crossOriginLoading: "anonymous",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  plugins: [
    new SriPlugin({
      hashFuncNames: ["sha256", "sha384"],
      enabled: true,
    }),
    new HtmlWebpackPlugin({
      title: "Code Splitting",
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css)$/,
      threshold: 0,
    }),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
      test: /\.(js|css)$/,
      compressionOptions: {
        level: 11,
      },
      threshold: 0,
    }),
  ],
};
