using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Models;
using ASP.NETCoreWebApplication.Services;


namespace ASP.NETCoreWebApplication.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase {
        private readonly GamesService _gamesService;

        public GameController(GamesService gamesService)
        {
            _gamesService = gamesService;
        }


        [HttpGet]
        public ActionResult<List<Game>> Get()
        {
            return _gamesService.Get();
        }
        
        [HttpGet("{id:length(24)}")]
        [Route("[action]")]
        public ActionResult<Game> Get(string id)
        {
            return _gamesService.Get(id);
        }

        [HttpPost("create")]
        public ActionResult<Game> Post(Game game)
        {
            Debug.WriteLine("game");
            _gamesService.Create(game);
            return game;
        }

        [HttpDelete("delete/{id:length(24)}")]
        [Route("[action]")]
        public IActionResult Delete(string id)
        {
            var game = _gamesService.Get(id);

            if (game == null)
            {
                return NotFound();
            }

            _gamesService.Remove(game.Id);
            return NoContent();
        }

        [HttpPut("edit")]
        public IActionResult Put(Game gameIn)
        {
            var game = _gamesService.Get(gameIn.Id);

            if (game == null)
            {
                return NotFound();
            }

            _gamesService.Update(gameIn);
            return NoContent();
        }
    }
}