
using MongoDB.Driver;
using ASP.NETCoreWebApplication.Models;
using System.Collections.Generic;

namespace ASP.NETCoreWebApplication.Services {
    public class CharactersService {
        private readonly IMongoCollection<Character> _characters;

        public CharactersService(DatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DataBaseName);
            _characters = database.GetCollection<Character>(settings.CharacterCollectionName);
        }

        public List<Character> Get()
        {
            return _characters.Find(character => true).ToList();
        }

        public Character Get(string id)
        {
            return _characters.Find(character => character.Id == id).SingleOrDefault();
        }
        
        public Character Create(Character character){
            _characters.InsertOne(character);
            return character;
        }

        public void Remove(string id){
            _characters.DeleteMany( character => character.Id == id );
        }

        public void Update( Character characterIn ){
            _characters.ReplaceOne( character => character.Id == characterIn.Id, characterIn );
        }
    }
}