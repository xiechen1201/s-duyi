import { createRouter, createWebHistory } from "vue-router";

const modules = import.meta.glob("../views/**/*.vue");
const meats = import.meta.glob("../views/**/*.meta.js", { eager: true });

function createDynamicRoutes(modules, meats) {
    const dynamic = [];
    Object.keys(modules).forEach((key) => {
        const originKey = key;
        const name = key
            .replace("../views", "")
            .replace(/\/_/g, "/:")
            .replace("/index", "")
            .replace(".vue", "");
        const metaKey = originKey.replace(".vue", ".meta.js");

        dynamic.push({
            path: name,
            component: modules[originKey],
            meta: meats[metaKey]?.default
        });
    });

    return dynamic;
}

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    ...createDynamicRoutes(modules, meats)
];

export default createRouter({
    history: createWebHistory(),
    routes
});
