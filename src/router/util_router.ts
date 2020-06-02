import * as R from "ramda";
// const development_import = (file: string) => import("@/views/pages/" + file);
// const production_import = (file: string) => () => import("@/views/pages/" + file);
// const dynamicImport = (base_path = "@/views/pages/") => {
//   if (process.env.NODE_ENV === "development")
//     return (file: string) => () => import(base_path + file);
//   return (file: string) => () => import(base_path + file);
// };
// export const _import = dynamicImport();
//
// const dynamicImport = (base_path = "@/views/pages/") => {
//   console.log(process.env.NODE_ENV);
//   if (process.env.NODE_ENV !== "development")
//     return (file: string) => import(base_path + file);
//   return (file: string) => () => import(base_path + file);
// };
// const _import = dynamicImport();
// const base_path = "@/views/pages/";
// const testImport = () => import(`${base_path}About.vue`);
