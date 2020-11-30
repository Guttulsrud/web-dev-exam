using System;
using MongoDB.Driver;
using ASP.NETCoreWebApplication.Models;
using System.Linq;
using System.Collections.Generic;

namespace ASP.NETCoreWebApplication.Services {
    public class AccessoriesService {
        private readonly IMongoCollection<Accessory> _accessories;

        public AccessoriesService(DatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DataBaseName);
            _accessories = database.GetCollection<Accessory>(settings.DeviceCollectionName);
        }

        public List<Accessory> Get()
        {
            return _accessories.Find(accessory => true).ToList();
        }

        public Accessory Get(string id)
        {
            return _accessories.Find(accessory => accessory.Id == id).SingleOrDefault();
        }
        
        public Accessory Create(Accessory accessory){
            _accessories.InsertOne(accessory);
            return accessory;
        }

        public void Remove(string id){
            _accessories.DeleteMany( accessory => accessory.Id == id );
        }

        public void Update( Accessory accessoryIn ){
            _accessories.ReplaceOne( accessory => accessory.Id == accessoryIn.Id, accessoryIn );
        }
    }
}