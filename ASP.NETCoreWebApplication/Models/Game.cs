using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ASP.NETCoreWebApplication.Models {
    public class Game{
        
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Subtitle { get; set; }
        public string Description { get; set; }
        public string Description2 { get; set; }
        public string FeatureImage { get; set; }
        public string GameBoxImage { get; set; }
        public string TrailerLink { get; set; }
        public string Price { get; set; }
        public string GameLogo { get; set; }
        public string Developer { get; set; }
        public string Year { get; set; }
        public List<string> Screenshots { get; set; }
        public bool IsDark { get; set; }
        public bool IsFeatured { get; set; }
    }
}