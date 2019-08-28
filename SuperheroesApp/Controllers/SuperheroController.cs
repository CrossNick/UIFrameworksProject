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
            var model = new SuperheroInfoVM() {
                Name = "Name",
                NickName = "SerName",
                DOB = "22.08.1998"
            };

            return PartialView("_SuperheroInfoModal", model);
        }

    }
}