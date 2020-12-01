using System;
using MongoDB.Driver;
using ASP.NETCoreWebApplication.Models;
using System.Linq;
using System.Collections.Generic;

namespace ASP.NETCoreWebApplication.Services {
    public class DevicesService {
        private readonly IMongoCollection<Device> _devices;

        public DevicesService(DatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DataBaseName);
            _devices = database.GetCollection<Device>(settings.DeviceCollectionName);
        }

        public List<Device> Get()
        {
            return _devices.Find(device => true).ToList();
        }

        public Device Get(string id)
        {
            return _devices.Find(device => device.Id == id).SingleOrDefault();
        }

        public Device Create(Device device){
            _devices.InsertOne(device);
            return device;
        }

        public void Remove(string id){
            _devices.DeleteMany( device => device.Id == id );
        }

        public void Update( Device deviceIn ){
            _devices.ReplaceOne( device => device.Id == deviceIn.Id, deviceIn );
        }
    }
}