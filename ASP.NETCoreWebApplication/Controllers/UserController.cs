using System.Collections.Generic;
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

        [HttpPost("create")]
        public ActionResult<User> Post(User user)
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

        [HttpPut]
        public IActionResult Put(User userIn)
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