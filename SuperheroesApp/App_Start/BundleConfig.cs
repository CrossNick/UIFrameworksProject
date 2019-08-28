﻿using System.Web;
using System.Web.Optimization;

namespace SuperheroesApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui-1.12.1"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/moment").Include(
                        "~/Scripts/moment.js",
                        "~/Scripts/moment-timezone.js",
                       "~/Scripts/moment-with-locales.js"
                     ));


            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/select2.min.js",
                      "~/Scripts/DataTables/datatables.js"
                     ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap-datetimepicker").Include(
                    "~/Scripts/bootstrap-datetimepicker.js"
                  ));

            bundles.Add(new ScriptBundle("~/bundles/actions").Include(
                      //"~/Scripts/Actions.js",
                      // "~/Scripts/BookManagement.js",
                      // "~/Scripts/AuthorManagement.js",
                      // "~/Scripts/KOCustomBindings.js",
                      // "~/Scripts/Autogenerated/*.js",
                      // "~/Scripts/Autogenerated/Book/*.js",
                      // "~/Scripts/Autogenerated/Author/*.js"
                     ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-datetimepicker.css",
                      "~/Content/css/Styles.css",
                      "~/Content/css/select2.css",
                      "~/Scripts/DataTables/datatables.css",
                       "~/Content/themes/base/*.css"
                      ));


        }
    }
}