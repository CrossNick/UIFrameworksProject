using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SuperheroesApp.ViewModel
{
    public class SuperheroInfoVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NickName { get; set; }
        public string DOB { get; set; }

        public static List<SuperheroInfoVM> model = new List<SuperheroInfoVM>(){
                new SuperheroInfoVM()
                {
                    Id = 1,
                    Name = "Name 1",
                    NickName = "SerName 1",
                    DOB = "22.08.1998"
                },
                new SuperheroInfoVM()
                {
                    Id = 2,
                    Name = "Name 2",
                    NickName = "SerName 2",
                    DOB = "23.08.1998"
                },
                new SuperheroInfoVM()
                {
                    Id = 3,
                    Name = "Name 3",
                    NickName = "SerName 3",
                    DOB = "24.08.1998"
                },
                new SuperheroInfoVM()
                {
                    Id = 4,
                    Name = "Name 5",
                    NickName = "SerName 5",
                    DOB = "25.08.1998"
                },
                new SuperheroInfoVM()
                {
                    Id = 5,
                    Name = "Name 6",
                    NickName = "SerName 6",
                    DOB = "26.08.1998"
                }
            };
    }
}