[DllImport("kernel32.dll", SetLastError = true)]
static extern bool WriteProcessMemory(
    IntPtr hProcess,
    IntPtr lpBaseAddress,
    IntPtr lpBuffer,
    ulong nSize,
    IntPtr lpNumberOfBytesWritten
    );