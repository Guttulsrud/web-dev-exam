﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Models;
using ASP.NETCoreWebApplication.Services;


namespace ASP.NETCoreWebApplication.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase {
        private readonly GamesService _usersService;

        public GameController(GamesService usersService)
        {
            _usersService = usersService;
        }


        [HttpGet]
        public ActionResult<List<Game>> Get()
        {
            return _usersService.Get();
        }

        [HttpPost("create")]
        public ActionResult<Game> Post(Game user)
        {
            _usersService.Create(user);
            return user;
        }



        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var user = _usersService.Get(id);

            if (user == null)
            {
                return NotFound();
            }

            _usersService.Remove(user.Id);
            return NoContent();
        }

        [HttpPut("edit/{id:length(24)}")]
        public IActionResult Put(Game userIn)
        {
            var user = _usersService.Get(userIn.Id);

            if (user == null)
            {
                return NotFound();
            }

            _usersService.Update(user);
            return NoContent();
        }
    }
}