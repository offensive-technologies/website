[DllImport("kernel32.dll", SetLastError = true)]
static extern bool ReadProcessMemory(
    IntPtr hProcess,
    IntPtr lpBaseAddress,
    IntPtr lpBuffer,
    ulong nSize,
    IntPtr lpNumberOfBytesRead
    );