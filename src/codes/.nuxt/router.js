import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _876d0d50 = () => import('..\\code\\pages\\tutorial\\drop-db.vue' /* webpackChunkName: "pages_tutorial_drop-db" */).then(m => m.default || m)
const _4367fb78 = () => import('..\\code\\pages\\example\\update-with-operators.vue' /* webpackChunkName: "pages_example_update-with-operators" */).then(m => m.default || m)
const _b7bf5d5a = () => import('..\\code\\pages\\example\\where.vue' /* webpackChunkName: "pages_example_where" */).then(m => m.default || m)
const _01f6da6f = () => import('..\\code\\pages\\tutorial\\database.vue' /* webpackChunkName: "pages_tutorial_database" */).then(m => m.default || m)
const _7ca76930 = () => import('..\\code\\pages\\example\\operator.vue' /* webpackChunkName: "pages_example_operator" */).then(m => m.default || m)
const _5eaf5908 = () => import('..\\code\\pages\\example\\drop-db.vue' /* webpackChunkName: "pages_example_drop-db" */).then(m => m.default || m)
const _1c3df3ce = () => import('..\\code\\pages\\tutorial\\in.vue' /* webpackChunkName: "pages_tutorial_in" */).then(m => m.default || m)
const _dbfdb08e = () => import('..\\code\\pages\\example\\clear.vue' /* webpackChunkName: "pages_example_clear" */).then(m => m.default || m)
const _16086dfd = () => import('..\\code\\pages\\example\\insert.vue' /* webpackChunkName: "pages_example_insert" */).then(m => m.default || m)
const _5beb4b1a = () => import('..\\code\\pages\\tutorial\\skip.vue' /* webpackChunkName: "pages_tutorial_skip" */).then(m => m.default || m)
const _66c73480 = () => import('..\\code\\pages\\example\\distinct.vue' /* webpackChunkName: "pages_example_distinct" */).then(m => m.default || m)
const _1e6482f4 = () => import('..\\code\\pages\\example\\between.vue' /* webpackChunkName: "pages_example_between" */).then(m => m.default || m)
const _60cbbde6 = () => import('..\\code\\pages\\tutorial\\adv-sql-example.vue' /* webpackChunkName: "pages_tutorial_adv-sql-example" */).then(m => m.default || m)
const _45ba5627 = () => import('..\\code\\pages\\example\\limit.vue' /* webpackChunkName: "pages_example_limit" */).then(m => m.default || m)
const _4d4f8a27 = () => import('..\\code\\pages\\example\\or.vue' /* webpackChunkName: "pages_example_or" */).then(m => m.default || m)
const _1decc648 = () => import('..\\code\\pages\\example\\remove.vue' /* webpackChunkName: "pages_example_remove" */).then(m => m.default || m)
const _c7721c86 = () => import('..\\code\\pages\\tutorial\\update.vue' /* webpackChunkName: "pages_tutorial_update" */).then(m => m.default || m)
const _3f28a63e = () => import('..\\code\\pages\\example\\createdb.vue' /* webpackChunkName: "pages_example_createdb" */).then(m => m.default || m)
const _4627a3cd = () => import('..\\code\\pages\\example\\export-json.vue' /* webpackChunkName: "pages_example_export-json" */).then(m => m.default || m)
const _d800660c = () => import('..\\code\\pages\\example\\order-by.vue' /* webpackChunkName: "pages_example_order-by" */).then(m => m.default || m)
const _306b7dca = () => import('..\\code\\pages\\tutorial\\column.vue' /* webpackChunkName: "pages_tutorial_column" */).then(m => m.default || m)
const _893374ba = () => import('..\\code\\pages\\tutorial\\where.vue' /* webpackChunkName: "pages_tutorial_where" */).then(m => m.default || m)
const _6a6347e6 = () => import('..\\code\\pages\\example\\update.vue' /* webpackChunkName: "pages_example_update" */).then(m => m.default || m)
const _811643f2 = () => import('..\\code\\pages\\tutorial\\ignore-case.vue' /* webpackChunkName: "pages_tutorial_ignore-case" */).then(m => m.default || m)
const _047e46ce = () => import('..\\code\\pages\\tutorial\\enums.vue' /* webpackChunkName: "pages_tutorial_enums" */).then(m => m.default || m)
const _d8374eea = () => import('..\\code\\pages\\tutorial\\like.vue' /* webpackChunkName: "pages_tutorial_like" */).then(m => m.default || m)
const _6defce7a = () => import('..\\code\\pages\\example\\skip.vue' /* webpackChunkName: "pages_example_skip" */).then(m => m.default || m)
const _e7304e3e = () => import('..\\code\\pages\\tutorial\\orderby.vue' /* webpackChunkName: "pages_tutorial_orderby" */).then(m => m.default || m)
const _4da82f0a = () => import('..\\code\\pages\\tutorial\\aggregate.vue' /* webpackChunkName: "pages_tutorial_aggregate" */).then(m => m.default || m)
const _79989c2b = () => import('..\\code\\pages\\example\\aggregate.vue' /* webpackChunkName: "pages_example_aggregate" */).then(m => m.default || m)
const _2e53917b = () => import('..\\code\\pages\\example\\count.vue' /* webpackChunkName: "pages_example_count" */).then(m => m.default || m)
const _c06e034e = () => import('..\\code\\pages\\tutorial\\group-by.vue' /* webpackChunkName: "pages_tutorial_group-by" */).then(m => m.default || m)
const _10f93492 = () => import('..\\code\\pages\\example\\ignore-case.vue' /* webpackChunkName: "pages_example_ignore-case" */).then(m => m.default || m)
const _51c7e1ea = () => import('..\\code\\pages\\tutorial\\operators.vue' /* webpackChunkName: "pages_tutorial_operators" */).then(m => m.default || m)
const _22464f70 = () => import('..\\code\\pages\\tutorial\\distinct.vue' /* webpackChunkName: "pages_tutorial_distinct" */).then(m => m.default || m)
const _4e756310 = () => import('..\\code\\pages\\tutorial\\bulk-insert.vue' /* webpackChunkName: "pages_tutorial_bulk-insert" */).then(m => m.default || m)
const _7bfea344 = () => import('..\\code\\pages\\tutorial\\between.vue' /* webpackChunkName: "pages_tutorial_between" */).then(m => m.default || m)
const _4b369c70 = () => import('..\\code\\pages\\tutorial\\select.vue' /* webpackChunkName: "pages_tutorial_select" */).then(m => m.default || m)
const _42da1869 = () => import('..\\code\\pages\\example\\in.vue' /* webpackChunkName: "pages_example_in" */).then(m => m.default || m)
const _f65d3a5e = () => import('..\\code\\pages\\example\\simple-join.vue' /* webpackChunkName: "pages_example_simple-join" */).then(m => m.default || m)
const _79be06c0 = () => import('..\\code\\pages\\example\\select.vue' /* webpackChunkName: "pages_example_select" */).then(m => m.default || m)
const _07531052 = () => import('..\\code\\pages\\tutorial\\or.vue' /* webpackChunkName: "pages_tutorial_or" */).then(m => m.default || m)
const _5d004a77 = () => import('..\\code\\pages\\tutorial\\limit.vue' /* webpackChunkName: "pages_tutorial_limit" */).then(m => m.default || m)
const _655483d6 = () => import('..\\code\\pages\\tutorial\\change-table-design.vue' /* webpackChunkName: "pages_tutorial_change-table-design" */).then(m => m.default || m)
const _0e191c1d = () => import('..\\code\\pages\\tutorial\\export-json.vue' /* webpackChunkName: "pages_tutorial_export-json" */).then(m => m.default || m)
const _5c921d74 = () => import('..\\code\\pages\\tutorial\\get-started.vue' /* webpackChunkName: "pages_tutorial_get-started" */).then(m => m.default || m)
const _7e80f90a = () => import('..\\code\\pages\\tutorial\\table.vue' /* webpackChunkName: "pages_tutorial_table" */).then(m => m.default || m)
const _75fd68bb = () => import('..\\code\\pages\\tutorial\\update-with-operator.vue' /* webpackChunkName: "pages_tutorial_update-with-operator" */).then(m => m.default || m)
const _459985cb = () => import('..\\code\\pages\\tutorial\\count.vue' /* webpackChunkName: "pages_tutorial_count" */).then(m => m.default || m)
const _30fdf8a6 = () => import('..\\code\\pages\\tutorial\\insert.vue' /* webpackChunkName: "pages_tutorial_insert" */).then(m => m.default || m)
const _02c6f6c4 = () => import('..\\code\\pages\\tutorial\\join.vue' /* webpackChunkName: "pages_tutorial_join" */).then(m => m.default || m)
const _25b98992 = () => import('..\\code\\pages\\example\\multiple-table-join.vue' /* webpackChunkName: "pages_example_multiple-table-join" */).then(m => m.default || m)
const _d2f6d17e = () => import('..\\code\\pages\\tutorial\\helpers.vue' /* webpackChunkName: "pages_tutorial_helpers" */).then(m => m.default || m)
const _ad71c7ee = () => import('..\\code\\pages\\tutorial\\clear.vue' /* webpackChunkName: "pages_tutorial_clear" */).then(m => m.default || m)
const _21354810 = () => import('..\\code\\pages\\tutorial\\remove.vue' /* webpackChunkName: "pages_tutorial_remove" */).then(m => m.default || m)
const _960f48f4 = () => import('..\\code\\pages\\example\\change-table-design.vue' /* webpackChunkName: "pages_example_change-table-design" */).then(m => m.default || m)
const _4a1f14a9 = () => import('..\\code\\pages\\example\\group-by.vue' /* webpackChunkName: "pages_example_group-by" */).then(m => m.default || m)
const _ea3bd24a = () => import('..\\code\\pages\\example\\like.vue' /* webpackChunkName: "pages_example_like" */).then(m => m.default || m)
const _17913ca4 = () => import('..\\code\\pages\\tutorial\\installation.vue' /* webpackChunkName: "pages_tutorial_installation" */).then(m => m.default || m)
const _84e9242e = () => import('..\\code\\pages\\v1\\tutorial\\between.vue' /* webpackChunkName: "pages_v1_tutorial_between" */).then(m => m.default || m)
const _a11bae9a = () => import('..\\code\\pages\\v1\\tutorial\\remove.vue' /* webpackChunkName: "pages_v1_tutorial_remove" */).then(m => m.default || m)
const _5e7f7588 = () => import('..\\code\\pages\\v1\\tutorial\\where.vue' /* webpackChunkName: "pages_v1_tutorial_where" */).then(m => m.default || m)
const _194977ce = () => import('..\\code\\pages\\v1\\tutorial\\join.vue' /* webpackChunkName: "pages_v1_tutorial_join" */).then(m => m.default || m)
const _f2803198 = () => import('..\\code\\pages\\v1\\example\\clear.vue' /* webpackChunkName: "pages_v1_example_clear" */).then(m => m.default || m)
const _4fdd3c34 = () => import('..\\code\\pages\\v1\\tutorial\\helpers.vue' /* webpackChunkName: "pages_v1_tutorial_helpers" */).then(m => m.default || m)
const _0339160d = () => import('..\\code\\pages\\v1\\example\\operator.vue' /* webpackChunkName: "pages_v1_example_operator" */).then(m => m.default || m)
const _726dcc24 = () => import('..\\code\\pages\\v1\\tutorial\\skip.vue' /* webpackChunkName: "pages_v1_tutorial_skip" */).then(m => m.default || m)
const _1252d96b = () => import('..\\code\\pages\\v1\\tutorial\\distinct.vue' /* webpackChunkName: "pages_v1_tutorial_distinct" */).then(m => m.default || m)
const _ce41de64 = () => import('..\\code\\pages\\v1\\example\\where.vue' /* webpackChunkName: "pages_v1_example_where" */).then(m => m.default || m)
const _40a3f97c = () => import('..\\code\\pages\\v1\\tutorial\\promise.vue' /* webpackChunkName: "pages_v1_tutorial_promise" */).then(m => m.default || m)
const _2ebe7720 = () => import('..\\code\\pages\\v1\\tutorial\\operators.vue' /* webpackChunkName: "pages_v1_tutorial_operators" */).then(m => m.default || m)
const _00197a5c = () => import('..\\code\\pages\\v1\\tutorial\\limit.vue' /* webpackChunkName: "pages_v1_tutorial_limit" */).then(m => m.default || m)
const _2a9ec440 = () => import('..\\code\\pages\\v1\\tutorial\\aggregate.vue' /* webpackChunkName: "pages_v1_tutorial_aggregate" */).then(m => m.default || m)
const _14400800 = () => import('..\\code\\pages\\v1\\example\\like.vue' /* webpackChunkName: "pages_v1_example_like" */).then(m => m.default || m)
const _219a28ef = () => import('..\\code\\pages\\v1\\tutorial\\table.vue' /* webpackChunkName: "pages_v1_tutorial_table" */).then(m => m.default || m)
const _6de78bf2 = () => import('..\\code\\pages\\v1\\example\\update.vue' /* webpackChunkName: "pages_v1_example_update" */).then(m => m.default || m)
const _1bf9372c = () => import('..\\code\\pages\\v1\\tutorial\\database.vue' /* webpackChunkName: "pages_v1_tutorial_database" */).then(m => m.default || m)
const _35e902ce = () => import('..\\code\\pages\\v1\\example\\in.vue' /* webpackChunkName: "pages_v1_example_in" */).then(m => m.default || m)
const _b0e45f30 = () => import('..\\code\\pages\\v1\\tutorial\\insert.vue' /* webpackChunkName: "pages_v1_tutorial_insert" */).then(m => m.default || m)
const _3405fde8 = () => import('..\\code\\pages\\v1\\example\\skip.vue' /* webpackChunkName: "pages_v1_example_skip" */).then(m => m.default || m)
const _5c53be78 = () => import('..\\code\\pages\\v1\\tutorial\\update.vue' /* webpackChunkName: "pages_v1_tutorial_update" */).then(m => m.default || m)
const _6b24da12 = () => import('..\\code\\pages\\v1\\tutorial\\or.vue' /* webpackChunkName: "pages_v1_tutorial_or" */).then(m => m.default || m)
const _431d60a2 = () => import('..\\code\\pages\\v1\\example\\between.vue' /* webpackChunkName: "pages_v1_example_between" */).then(m => m.default || m)
const _b0d1129a = () => import('..\\code\\pages\\v1\\tutorial\\enums.vue' /* webpackChunkName: "pages_v1_tutorial_enums" */).then(m => m.default || m)
const _8dbcc43c = () => import('..\\code\\pages\\v1\\example\\insert.vue' /* webpackChunkName: "pages_v1_example_insert" */).then(m => m.default || m)
const _69a52626 = () => import('..\\code\\pages\\v1\\example\\aggregate.vue' /* webpackChunkName: "pages_v1_example_aggregate" */).then(m => m.default || m)
const _60af6854 = () => import('..\\code\\pages\\v1\\tutorial\\in.vue' /* webpackChunkName: "pages_v1_tutorial_in" */).then(m => m.default || m)
const _0b43692b = () => import('..\\code\\pages\\v1\\tutorial\\select.vue' /* webpackChunkName: "pages_v1_tutorial_select" */).then(m => m.default || m)
const _4c604bee = () => import('..\\code\\pages\\v1\\tutorial\\clear.vue' /* webpackChunkName: "pages_v1_tutorial_clear" */).then(m => m.default || m)
const _eeb9cff4 = () => import('..\\code\\pages\\v1\\tutorial\\like.vue' /* webpackChunkName: "pages_v1_tutorial_like" */).then(m => m.default || m)
const _7df413a6 = () => import('..\\code\\pages\\v1\\example\\remove.vue' /* webpackChunkName: "pages_v1_example_remove" */).then(m => m.default || m)
const _6189db42 = () => import('..\\code\\pages\\v1\\example\\promise.vue' /* webpackChunkName: "pages_v1_example_promise" */).then(m => m.default || m)
const _d2af13ae = () => import('..\\code\\pages\\v1\\tutorial\\installation.vue' /* webpackChunkName: "pages_v1_tutorial_installation" */).then(m => m.default || m)
const _405e748c = () => import('..\\code\\pages\\v1\\example\\or.vue' /* webpackChunkName: "pages_v1_example_or" */).then(m => m.default || m)
const _1cd736a5 = () => import('..\\code\\pages\\v1\\example\\select.vue' /* webpackChunkName: "pages_v1_example_select" */).then(m => m.default || m)
const _231250f6 = () => import('..\\code\\pages\\v1\\example\\count.vue' /* webpackChunkName: "pages_v1_example_count" */).then(m => m.default || m)
const _2e9a94a0 = () => import('..\\code\\pages\\v1\\tutorial\\count.vue' /* webpackChunkName: "pages_v1_tutorial_count" */).then(m => m.default || m)
const _3a7915a2 = () => import('..\\code\\pages\\v1\\example\\limit.vue' /* webpackChunkName: "pages_v1_example_limit" */).then(m => m.default || m)
const _0e293065 = () => import('..\\code\\pages\\v1\\example\\distinct.vue' /* webpackChunkName: "pages_v1_example_distinct" */).then(m => m.default || m)
const _58e284b1 = () => import('..\\code\\pages\\v1\\example\\multiple_table_join.vue' /* webpackChunkName: "pages_v1_example_multiple_table_join" */).then(m => m.default || m)
const _15962df9 = () => import('..\\code\\pages\\v1\\tutorial\\get_started.vue' /* webpackChunkName: "pages_v1_tutorial_get_started" */).then(m => m.default || m)
const _2eadd357 = () => import('..\\code\\pages\\v1\\tutorial\\order_by.vue' /* webpackChunkName: "pages_v1_tutorial_order_by" */).then(m => m.default || m)
const _73b3b875 = () => import('..\\code\\pages\\v1\\example\\drop_db.vue' /* webpackChunkName: "pages_v1_example_drop_db" */).then(m => m.default || m)
const _d8c173f0 = () => import('..\\code\\pages\\v1\\example\\create_db.vue' /* webpackChunkName: "pages_v1_example_create_db" */).then(m => m.default || m)
const _7a02449a = () => import('..\\code\\pages\\v1\\example\\update_with_operators.vue' /* webpackChunkName: "pages_v1_example_update_with_operators" */).then(m => m.default || m)
const _b1dd7d14 = () => import('..\\code\\pages\\v1\\tutorial\\update_with_operator.vue' /* webpackChunkName: "pages_v1_tutorial_update_with_operator" */).then(m => m.default || m)
const _77ff7c5e = () => import('..\\code\\pages\\v1\\tutorial\\ignore_case.vue' /* webpackChunkName: "pages_v1_tutorial_ignore_case" */).then(m => m.default || m)
const _cd7def84 = () => import('..\\code\\pages\\v1\\example\\simple_join.vue' /* webpackChunkName: "pages_v1_example_simple_join" */).then(m => m.default || m)
const _0bf30b24 = () => import('..\\code\\pages\\v1\\example\\ignore_case.vue' /* webpackChunkName: "pages_v1_example_ignore_case" */).then(m => m.default || m)
const _3eb91c00 = () => import('..\\code\\pages\\v1\\example\\group_by.vue' /* webpackChunkName: "pages_v1_example_group_by" */).then(m => m.default || m)
const _2a842a51 = () => import('..\\code\\pages\\v1\\example\\order_by.vue' /* webpackChunkName: "pages_v1_example_order_by" */).then(m => m.default || m)
const _264d3ce7 = () => import('..\\code\\pages\\v1\\tutorial\\bulk_insert.vue' /* webpackChunkName: "pages_v1_tutorial_bulk_insert" */).then(m => m.default || m)
const _3bc12da5 = () => import('..\\code\\pages\\v1\\example\\change_table_design.vue' /* webpackChunkName: "pages_v1_example_change_table_design" */).then(m => m.default || m)
const _5a97493a = () => import('..\\code\\pages\\v1\\example\\export_json.vue' /* webpackChunkName: "pages_v1_example_export_json" */).then(m => m.default || m)
const _72b88b18 = () => import('..\\code\\pages\\v1\\tutorial\\export_json.vue' /* webpackChunkName: "pages_v1_tutorial_export_json" */).then(m => m.default || m)
const _321efe6c = () => import('..\\code\\pages\\v1\\tutorial\\drop_database.vue' /* webpackChunkName: "pages_v1_tutorial_drop_database" */).then(m => m.default || m)
const _37efce64 = () => import('..\\code\\pages\\v1\\tutorial\\adv_sql_example.vue' /* webpackChunkName: "pages_v1_tutorial_adv_sql_example" */).then(m => m.default || m)
const _3665c9f4 = () => import('..\\code\\pages\\v1\\tutorial\\group_by.vue' /* webpackChunkName: "pages_v1_tutorial_group_by" */).then(m => m.default || m)
const _af647642 = () => import('..\\code\\pages\\v1\\tutorial\\change_table_design.vue' /* webpackChunkName: "pages_v1_tutorial_change_table_design" */).then(m => m.default || m)
const _7c9ffc2c = () => import('..\\code\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/tutorial/drop-db",
			component: _876d0d50,
			name: "tutorial-drop-db"
		},
		{
			path: "/example/update-with-operators",
			component: _4367fb78,
			name: "example-update-with-operators"
		},
		{
			path: "/example/where",
			component: _b7bf5d5a,
			name: "example-where"
		},
		{
			path: "/tutorial/database",
			component: _01f6da6f,
			name: "tutorial-database"
		},
		{
			path: "/example/operator",
			component: _7ca76930,
			name: "example-operator"
		},
		{
			path: "/example/drop-db",
			component: _5eaf5908,
			name: "example-drop-db"
		},
		{
			path: "/tutorial/in",
			component: _1c3df3ce,
			name: "tutorial-in"
		},
		{
			path: "/example/clear",
			component: _dbfdb08e,
			name: "example-clear"
		},
		{
			path: "/example/insert",
			component: _16086dfd,
			name: "example-insert"
		},
		{
			path: "/tutorial/skip",
			component: _5beb4b1a,
			name: "tutorial-skip"
		},
		{
			path: "/example/distinct",
			component: _66c73480,
			name: "example-distinct"
		},
		{
			path: "/example/between",
			component: _1e6482f4,
			name: "example-between"
		},
		{
			path: "/tutorial/adv-sql-example",
			component: _60cbbde6,
			name: "tutorial-adv-sql-example"
		},
		{
			path: "/example/limit",
			component: _45ba5627,
			name: "example-limit"
		},
		{
			path: "/example/or",
			component: _4d4f8a27,
			name: "example-or"
		},
		{
			path: "/example/remove",
			component: _1decc648,
			name: "example-remove"
		},
		{
			path: "/tutorial/update",
			component: _c7721c86,
			name: "tutorial-update"
		},
		{
			path: "/example/createdb",
			component: _3f28a63e,
			name: "example-createdb"
		},
		{
			path: "/example/export-json",
			component: _4627a3cd,
			name: "example-export-json"
		},
		{
			path: "/example/order-by",
			component: _d800660c,
			name: "example-order-by"
		},
		{
			path: "/tutorial/column",
			component: _306b7dca,
			name: "tutorial-column"
		},
		{
			path: "/tutorial/where",
			component: _893374ba,
			name: "tutorial-where"
		},
		{
			path: "/example/update",
			component: _6a6347e6,
			name: "example-update"
		},
		{
			path: "/tutorial/ignore-case",
			component: _811643f2,
			name: "tutorial-ignore-case"
		},
		{
			path: "/tutorial/enums",
			component: _047e46ce,
			name: "tutorial-enums"
		},
		{
			path: "/tutorial/like",
			component: _d8374eea,
			name: "tutorial-like"
		},
		{
			path: "/example/skip",
			component: _6defce7a,
			name: "example-skip"
		},
		{
			path: "/tutorial/orderby",
			component: _e7304e3e,
			name: "tutorial-orderby"
		},
		{
			path: "/tutorial/aggregate",
			component: _4da82f0a,
			name: "tutorial-aggregate"
		},
		{
			path: "/example/aggregate",
			component: _79989c2b,
			name: "example-aggregate"
		},
		{
			path: "/example/count",
			component: _2e53917b,
			name: "example-count"
		},
		{
			path: "/tutorial/group-by",
			component: _c06e034e,
			name: "tutorial-group-by"
		},
		{
			path: "/example/ignore-case",
			component: _10f93492,
			name: "example-ignore-case"
		},
		{
			path: "/tutorial/operators",
			component: _51c7e1ea,
			name: "tutorial-operators"
		},
		{
			path: "/tutorial/distinct",
			component: _22464f70,
			name: "tutorial-distinct"
		},
		{
			path: "/tutorial/bulk-insert",
			component: _4e756310,
			name: "tutorial-bulk-insert"
		},
		{
			path: "/tutorial/between",
			component: _7bfea344,
			name: "tutorial-between"
		},
		{
			path: "/tutorial/select",
			component: _4b369c70,
			name: "tutorial-select"
		},
		{
			path: "/example/in",
			component: _42da1869,
			name: "example-in"
		},
		{
			path: "/example/simple-join",
			component: _f65d3a5e,
			name: "example-simple-join"
		},
		{
			path: "/example/select",
			component: _79be06c0,
			name: "example-select"
		},
		{
			path: "/tutorial/or",
			component: _07531052,
			name: "tutorial-or"
		},
		{
			path: "/tutorial/limit",
			component: _5d004a77,
			name: "tutorial-limit"
		},
		{
			path: "/tutorial/change-table-design",
			component: _655483d6,
			name: "tutorial-change-table-design"
		},
		{
			path: "/tutorial/export-json",
			component: _0e191c1d,
			name: "tutorial-export-json"
		},
		{
			path: "/tutorial/get-started",
			component: _5c921d74,
			name: "tutorial-get-started"
		},
		{
			path: "/tutorial/table",
			component: _7e80f90a,
			name: "tutorial-table"
		},
		{
			path: "/tutorial/update-with-operator",
			component: _75fd68bb,
			name: "tutorial-update-with-operator"
		},
		{
			path: "/tutorial/count",
			component: _459985cb,
			name: "tutorial-count"
		},
		{
			path: "/tutorial/insert",
			component: _30fdf8a6,
			name: "tutorial-insert"
		},
		{
			path: "/tutorial/join",
			component: _02c6f6c4,
			name: "tutorial-join"
		},
		{
			path: "/example/multiple-table-join",
			component: _25b98992,
			name: "example-multiple-table-join"
		},
		{
			path: "/tutorial/helpers",
			component: _d2f6d17e,
			name: "tutorial-helpers"
		},
		{
			path: "/tutorial/clear",
			component: _ad71c7ee,
			name: "tutorial-clear"
		},
		{
			path: "/tutorial/remove",
			component: _21354810,
			name: "tutorial-remove"
		},
		{
			path: "/example/change-table-design",
			component: _960f48f4,
			name: "example-change-table-design"
		},
		{
			path: "/example/group-by",
			component: _4a1f14a9,
			name: "example-group-by"
		},
		{
			path: "/example/like",
			component: _ea3bd24a,
			name: "example-like"
		},
		{
			path: "/tutorial/installation",
			component: _17913ca4,
			name: "tutorial-installation"
		},
		{
			path: "/v1/tutorial/between",
			component: _84e9242e,
			name: "v1-tutorial-between"
		},
		{
			path: "/v1/tutorial/remove",
			component: _a11bae9a,
			name: "v1-tutorial-remove"
		},
		{
			path: "/v1/tutorial/where",
			component: _5e7f7588,
			name: "v1-tutorial-where"
		},
		{
			path: "/v1/tutorial/join",
			component: _194977ce,
			name: "v1-tutorial-join"
		},
		{
			path: "/v1/example/clear",
			component: _f2803198,
			name: "v1-example-clear"
		},
		{
			path: "/v1/tutorial/helpers",
			component: _4fdd3c34,
			name: "v1-tutorial-helpers"
		},
		{
			path: "/v1/example/operator",
			component: _0339160d,
			name: "v1-example-operator"
		},
		{
			path: "/v1/tutorial/skip",
			component: _726dcc24,
			name: "v1-tutorial-skip"
		},
		{
			path: "/v1/tutorial/distinct",
			component: _1252d96b,
			name: "v1-tutorial-distinct"
		},
		{
			path: "/v1/example/where",
			component: _ce41de64,
			name: "v1-example-where"
		},
		{
			path: "/v1/tutorial/promise",
			component: _40a3f97c,
			name: "v1-tutorial-promise"
		},
		{
			path: "/v1/tutorial/operators",
			component: _2ebe7720,
			name: "v1-tutorial-operators"
		},
		{
			path: "/v1/tutorial/limit",
			component: _00197a5c,
			name: "v1-tutorial-limit"
		},
		{
			path: "/v1/tutorial/aggregate",
			component: _2a9ec440,
			name: "v1-tutorial-aggregate"
		},
		{
			path: "/v1/example/like",
			component: _14400800,
			name: "v1-example-like"
		},
		{
			path: "/v1/tutorial/table",
			component: _219a28ef,
			name: "v1-tutorial-table"
		},
		{
			path: "/v1/example/update",
			component: _6de78bf2,
			name: "v1-example-update"
		},
		{
			path: "/v1/tutorial/database",
			component: _1bf9372c,
			name: "v1-tutorial-database"
		},
		{
			path: "/v1/example/in",
			component: _35e902ce,
			name: "v1-example-in"
		},
		{
			path: "/v1/tutorial/insert",
			component: _b0e45f30,
			name: "v1-tutorial-insert"
		},
		{
			path: "/v1/example/skip",
			component: _3405fde8,
			name: "v1-example-skip"
		},
		{
			path: "/v1/tutorial/update",
			component: _5c53be78,
			name: "v1-tutorial-update"
		},
		{
			path: "/v1/tutorial/or",
			component: _6b24da12,
			name: "v1-tutorial-or"
		},
		{
			path: "/v1/example/between",
			component: _431d60a2,
			name: "v1-example-between"
		},
		{
			path: "/v1/tutorial/enums",
			component: _b0d1129a,
			name: "v1-tutorial-enums"
		},
		{
			path: "/v1/example/insert",
			component: _8dbcc43c,
			name: "v1-example-insert"
		},
		{
			path: "/v1/example/aggregate",
			component: _69a52626,
			name: "v1-example-aggregate"
		},
		{
			path: "/v1/tutorial/in",
			component: _60af6854,
			name: "v1-tutorial-in"
		},
		{
			path: "/v1/tutorial/select",
			component: _0b43692b,
			name: "v1-tutorial-select"
		},
		{
			path: "/v1/tutorial/clear",
			component: _4c604bee,
			name: "v1-tutorial-clear"
		},
		{
			path: "/v1/tutorial/like",
			component: _eeb9cff4,
			name: "v1-tutorial-like"
		},
		{
			path: "/v1/example/remove",
			component: _7df413a6,
			name: "v1-example-remove"
		},
		{
			path: "/v1/example/promise",
			component: _6189db42,
			name: "v1-example-promise"
		},
		{
			path: "/v1/tutorial/installation",
			component: _d2af13ae,
			name: "v1-tutorial-installation"
		},
		{
			path: "/v1/example/or",
			component: _405e748c,
			name: "v1-example-or"
		},
		{
			path: "/v1/example/select",
			component: _1cd736a5,
			name: "v1-example-select"
		},
		{
			path: "/v1/example/count",
			component: _231250f6,
			name: "v1-example-count"
		},
		{
			path: "/v1/tutorial/count",
			component: _2e9a94a0,
			name: "v1-tutorial-count"
		},
		{
			path: "/v1/example/limit",
			component: _3a7915a2,
			name: "v1-example-limit"
		},
		{
			path: "/v1/example/distinct",
			component: _0e293065,
			name: "v1-example-distinct"
		},
		{
			path: "/v1/example/multiple:table_join?",
			component: _58e284b1,
			name: "v1-example-multipletable_join"
		},
		{
			path: "/v1/tutorial/get:started?",
			component: _15962df9,
			name: "v1-tutorial-getstarted"
		},
		{
			path: "/v1/tutorial/order:by?",
			component: _2eadd357,
			name: "v1-tutorial-orderby"
		},
		{
			path: "/v1/example/drop:db?",
			component: _73b3b875,
			name: "v1-example-dropdb"
		},
		{
			path: "/v1/example/create:db?",
			component: _d8c173f0,
			name: "v1-example-createdb"
		},
		{
			path: "/v1/example/update:with_operators?",
			component: _7a02449a,
			name: "v1-example-updatewith_operators"
		},
		{
			path: "/v1/tutorial/update:with_operator?",
			component: _b1dd7d14,
			name: "v1-tutorial-updatewith_operator"
		},
		{
			path: "/v1/tutorial/ignore:case?",
			component: _77ff7c5e,
			name: "v1-tutorial-ignorecase"
		},
		{
			path: "/v1/example/simple:join?",
			component: _cd7def84,
			name: "v1-example-simplejoin"
		},
		{
			path: "/v1/example/ignore:case?",
			component: _0bf30b24,
			name: "v1-example-ignorecase"
		},
		{
			path: "/v1/example/group:by?",
			component: _3eb91c00,
			name: "v1-example-groupby"
		},
		{
			path: "/v1/example/order:by?",
			component: _2a842a51,
			name: "v1-example-orderby"
		},
		{
			path: "/v1/tutorial/bulk:insert?",
			component: _264d3ce7,
			name: "v1-tutorial-bulkinsert"
		},
		{
			path: "/v1/example/change:table_design?",
			component: _3bc12da5,
			name: "v1-example-changetable_design"
		},
		{
			path: "/v1/example/export:json?",
			component: _5a97493a,
			name: "v1-example-exportjson"
		},
		{
			path: "/v1/tutorial/export:json?",
			component: _72b88b18,
			name: "v1-tutorial-exportjson"
		},
		{
			path: "/v1/tutorial/drop:database?",
			component: _321efe6c,
			name: "v1-tutorial-dropdatabase"
		},
		{
			path: "/v1/tutorial/adv:sql_example?",
			component: _37efce64,
			name: "v1-tutorial-advsql_example"
		},
		{
			path: "/v1/tutorial/group:by?",
			component: _3665c9f4,
			name: "v1-tutorial-groupby"
		},
		{
			path: "/v1/tutorial/change:table_design?",
			component: _af647642,
			name: "v1-tutorial-changetable_design"
		},
		{
			path: "/",
			component: _7c9ffc2c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
