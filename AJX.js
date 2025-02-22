public static api KeyAuthApp = new api(
    name: "AJX", // App name
    ownerid: "o0dHuOg0Bv", // Account ID
    version: "1.0" // Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
    //path: @"Your_Path_Here" // (OPTIONAL) see tutorial here https://www.youtube.com/watch?v=I9rxt821gMk&t=1s
);

std::string name = skCrypt("AJX").decrypt(); // App name
std::string ownerid = skCrypt("o0dHuOg0Bv").decrypt(); // Account ID
std::string secret = skCrypt("2b670f906cdc059bc089d153163adbf35904241f60ad46183902c316cfc6d2d7").decrypt(); // Application secret (not used in latest C++ example)
std::string version = skCrypt("1.0").decrypt(); // Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
std::string url = skCrypt("https://keyauth.win/api/1.3/").decrypt(); // change if using KeyAuth custom domains feature
std::string path = skCrypt("").decrypt(); // (OPTIONAL) see tutorial here https://www.youtube.com/watch?v=I9rxt821gMk&t=1s


keyauthapp = api(
    name = "AJX", # App name 
    ownerid = "o0dHuOg0Bv", # Account ID
    version = "1.0", # Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
    hash_to_check = getchecksum()
)；


$name = "AJX"; // App name 
$ownerid = "o0dHuOg0Bv"; // Account ID 


const KeyAuthApp = new KeyAuth(
    "AJX", // App name 
    "o0dHuOg0Bv", // Account ID
    "2b670f906cdc059bc089d153163adbf35904241f60ad46183902c316cfc6d2d7", // Encryption key, keep hidden and protect this string in your code!
    "1.0", // Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
);


private static String ownerid = "o0dHuOg0Bv", // Account ID
private static String appname = "AJX", // App name
private static String version = "1.0" // Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs


Private Shared name As String = "AJX" ' App name
Private Shared ownerid As String = "o0dHuOg0Bv" ' Account ID
Private Shared secret As String = "2b670f906cdc059bc089d153163adbf35904241f60ad46183902c316cfc6d2d7" ' Encryption key, keep hidden and protect this string in your code!
Private Shared version As String = "1.0" ' Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs



let mut keyauthapp = keyauth::v1_2::KeyauthApi::new(
    "AJX", // App name
    "o0dHuOg0Bv", // Account ID
    "2b670f906cdc059bc089d153163adbf35904241f60ad46183902c316cfc6d2d7",  // Encryption key, keep hidden and protect this string in your code!
    "1.0", // Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
    "https://keyauth.win/api/1.2/", // This is the API URL, change this to your custom domain if you have it enabled
);



let mut keyauthapp = keyauth::v1_2::KeyauthApi::new(
    "AJX", // App name
    "o0dHuOg0Bv", // Account ID
    "2b670f906cdc059bc089d153163adbf35904241f60ad46183902c316cfc6d2d7",  // Encryption key, keep hidden and protect this string in your code!
    "1.0", // Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
    "https://keyauth.win/api/1.2/", // This is the API URL, change this to your custom domain if you have it enabled
);


local name = "AJX"; -- App name
local ownerid = "o0dHuOg0Bv"; -- Account ID
local version = "1.0"; -- Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs


KeyAuth.new.Api(
    "AJX", # App name
    "o0dHuOg0Bv", # Account ID
    "2b670f906cdc059bc089d153163adbf35904241f60ad46183902c316cfc6d2d7", # Encryption key, keep hidden and protect this string in your code!
    "1.0" # Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
)；


KeyAuth::Api(
    "AJX", # App name
    "o0dHuOg0Bv", # Account ID
    "2b670f906cdc059bc089d153163adbf35904241f60ad46183902c316cfc6d2d7", # Encryption key, keep hidden and protect this string in your code!
    "1.0" # Application version. Used for automatic downloads see video here https://www.youtube.com/watch?v=kW195PLCBKs
);
