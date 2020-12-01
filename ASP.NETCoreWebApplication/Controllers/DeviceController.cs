using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Models;
using ASP.NETCoreWebApplication.Services;


namespace ASP.NETCoreWebApplication.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class DeviceController : ControllerBase {
        private readonly DevicesService _devicesService;

        public DeviceController(DevicesService devicesService)
        {
            _devicesService = devicesService;
        }


        [HttpGet]
        public ActionResult<List<Device>> Get()
        {
            return _devicesService.Get();
        }

        [HttpGet("{id:length(24)}")]
        [Route("[action]")]
        public Device GetOne(string id)
        {
            return _devicesService.Get(id);
        }



        [HttpPost("create")]
        public ActionResult<Device> Post(Device device)
        {
            _devicesService.Create(device);
            return device;
        }

        [HttpPut("edit")]
        public IActionResult Put(Device device)
        {

            var user = _devicesService.Get(device.Id);

            if (user == null)
            {
                return NotFound();
            }

            _devicesService.Update(device);
            return NoContent();
        }




        [HttpDelete("delete/{id:length(24)}")]
        [Route("[action]")]

        public IActionResult Delete(string id)
        {
            var device = _devicesService.Get(id);

            if (device == null)
            {
                return NotFound();
            }

            _devicesService.Remove(device.Id);
            return NoContent();
        }


    }
}