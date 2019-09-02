using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SuperheroesApp.ViewModel
{
    public class SuperheroListVM
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public static List<SuperheroListVM> superpowers = new List<SuperheroListVM>()
        {
            new SuperheroListVM()
            {
                Id = 1,
                Text = "Superpower 1"
            },
            new SuperheroListVM()
            {
                Id = 2,
                Text = "Superpower 2"
            },
            new SuperheroListVM()
            {
                Id = 3,
                Text = "Superpower 3"
            },
            new SuperheroListVM()
            {
                Id = 4,
                Text = "Superpower 4"
            },
            new SuperheroListVM()
            {
                Id = 5,
                Text = "Superpower 5"
            }
        };

        public static List<SuperheroListVM> achievements = new List<SuperheroListVM>()
        {
            new SuperheroListVM()
            {
                Id = 1,
                Text = "Achievement 1"
            },
            new SuperheroListVM()
            {
                Id = 2,
                Text = "Achievement 2"
            },
            new SuperheroListVM()
            {
                Id = 3,
                Text = "Achievement 3"
            },
            new SuperheroListVM()
            {
                Id = 4,
                Text = "Achievement 4"
            },
            new SuperheroListVM()
            {
                Id = 5,
                Text = "Achievement 5"
            }
        };
    }
}