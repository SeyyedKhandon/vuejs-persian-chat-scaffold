const errorRoutes = [
  {
    path: "/403",
    component: () => import("@/views/pages/errors/Err403ForbiddenAccess.vue")
  },
  // { path: '/500', component: Err500InternalServerError },
  {
    path: "*",
    alias: "/404",
    name: "404",
    component: () => import("@/views/pages/errors/Err404NotFound.vue")
  }
];
export { errorRoutes };
