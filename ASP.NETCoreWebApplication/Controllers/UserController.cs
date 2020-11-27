using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Models;
using ASP.NETCoreWebApplication.Services;


namespace ASP.NETCoreWebApplication.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase {
        private readonly UsersService _usersService;

        public UserController(UsersService usersService)
        {
            _usersService = usersService;
        }


        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return _usersService.Get();
        }
        
        [HttpGet("{id:length(24)}")]
        [Route("[action]")]
        public User GetOne(string id)
        {
            return _usersService.Get(id);
        }
        
        

        [HttpPost("create")]
        public ActionResult<User> Post(User user)
        {
            _usersService.Create(user);
            return user;
        }
        
        [HttpPost("login")]
        public bool Login(User userIn)
        {
            var user = _usersService.GetUserByUsername(userIn.Username);
            
            if (user == null)
            {
                return false;
            }
            
            return user.Password == userIn.Password;
        }

        [HttpPut("edit")]
        public IActionResult Put(User userIn)
        {
            
            var user = _usersService.Get(userIn.Id);

            if (user == null)
            {
                return NotFound();
            }
            
            _usersService.Update(userIn);
            return NoContent();
        }
  
        
        
        
        [HttpDelete("delete/{id:length(24)}")]
        [Route("[action]")]

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

      
    }
}