namespace ASP.NETCoreWebApplication.Models {
    public interface DatabaseSettings {
        string UserCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DataBaseName { get; set; }
    }


    public class StoreDatabaseSettings : DatabaseSettings {
        public string UserCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DataBaseName { get; set; }

    }
    

}