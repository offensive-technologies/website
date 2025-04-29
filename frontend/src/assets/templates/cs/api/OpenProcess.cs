[DllImport("kernel32.dll", SetLastError = true)]
static extern IntPtr OpenProcess(
    uint dwDesiredAccess,
    bool bInheritHandle,
    uint dwProcessId
    );