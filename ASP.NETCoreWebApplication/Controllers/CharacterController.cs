using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ASP.NETCoreWebApplication.Models;
using ASP.NETCoreWebApplication.Services;


namespace ASP.NETCoreWebApplication.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : ControllerBase {
        private readonly CharactersService _charactersService;

        public CharacterController(CharactersService charactersService)
        {
            _charactersService = charactersService;
        }


        [HttpGet]
        public ActionResult<List<Character>> Get()
        {
            return _charactersService.Get();
        }
        
        [HttpGet("{id:length(24)}")]
        [Route("[action]")]
        public Character GetOne(string id)
        {
            return _charactersService.Get(id);
        }
        
        

        [HttpPost("create")]
        public ActionResult<Character> Post(Character character)
        {
            _charactersService.Create(character);
            return character;
        }
        

        [HttpPut("edit")]
        public IActionResult Put(Character character)
        {
            
            var characterPut = _charactersService.Get(character.Id);

            if (characterPut == null)
            {
                return NotFound();
            }
            
            _charactersService.Update(character);
            return NoContent();
        }
  
        
        
        
        [HttpDelete("delete/{id:length(24)}")]
        [Route("[action]")]

        public IActionResult Delete(string id)
        {
            var character = _charactersService.Get(id);

            if (character == null)
            {
                return NotFound();
            }

            _charactersService.Remove(character.Id);
            return NoContent();
        }

      
    }
}