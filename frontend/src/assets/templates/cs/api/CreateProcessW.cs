[DllImport("kernel32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
internal static extern bool CreateProcessW(
    string lpApplicationName,    
    string lpCommandLine,        
    IntPtr lpProcessAttributes,  
    IntPtr lpThreadAttributes,   
    bool bInheritHandles,      
    uint dwCreationFlags,      
    IntPtr lpEnvironment,        
    string lpCurrentDirectory,   
    IntPtr lpStartupInfo,        
    IntPtr lpProcessInformation
    );