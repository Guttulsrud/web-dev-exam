using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Models;
using ASP.NETCoreWebApplication.Services;


namespace ASP.NETCoreWebApplication.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class AccessoryController : ControllerBase {
        private readonly AccessoriesService _accessoriesService;

        public AccessoryController(AccessoriesService accessoriesService)
        {
            _accessoriesService = accessoriesService;
        }


        [HttpGet]
        public ActionResult<List<Accessory>> Get()
        {
            return _accessoriesService.Get();
        }

        [HttpGet("{id:length(24)}")]
        [Route("[action]")]
        public Accessory GetOne(string id)
        {
            return _accessoriesService.Get(id);
        }



        [HttpPost("create")]
        public ActionResult<Accessory> Post(Accessory accessory)
        {
            _accessoriesService.Create(accessory);
            return accessory;
        }

        [HttpPut("edit")]
        public IActionResult Put(Accessory accessory)
        {

            var user = _accessoriesService.Get(accessory.Id);

            if (user == null)
            {
                return NotFound();
            }

            _accessoriesService.Update(accessory);
            return NoContent();
        }




        [HttpDelete("delete/{id:length(24)}")]
        [Route("[action]")]

        public IActionResult Delete(string id)
        {
            var accessory = _accessoriesService.Get(id);

            if (accessory == null)
            {
                return NotFound();
            }

            _accessoriesService.Remove(accessory.Id);
            return NoContent();
        }


    }
}