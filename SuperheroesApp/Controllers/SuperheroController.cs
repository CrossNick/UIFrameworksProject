using SuperheroesApp.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SuperheroesApp.Controllers
{
    public class SuperheroController : Controller
    {
        // GET: SuperheroForm
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SuperheroForm()
        {
            return View("SuperheroForm");
        }

        public ActionResult SuperheroGrid()
        {
            return View("SuperheroGrid");
        }

        [HttpGet]
        public ActionResult SuperheroInfoModal(int id)
        {
            var model = SuperheroInfoVM.model.Where(x => x.Id == id).First();

            return PartialView("_SuperheroInfoModal", model);
        }

        [HttpGet]
        public JsonResult GetGridInfo()
        {
            var model = SuperheroInfoVM.model;

            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetSuperpowers()
        {
            var model = SuperheroListVM.superpowers;

            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetAchievements()
        {
            var model = SuperheroListVM.achievements;

            return Json(model, JsonRequestBehavior.AllowGet);
        }

    }
}