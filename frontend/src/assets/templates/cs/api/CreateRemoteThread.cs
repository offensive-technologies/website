[DllImport("kernel32.dll", SetLastError = true)]
static extern IntPtr CreateRemoteThread(
    IntPtr hProcess,
    IntPtr lpThreadAttributes,
    ulong dwStackSize,
    IntPtr lpStartAddress,
    IntPtr lpParameter,
    uint dwCreationFlags,
    IntPtr lpThreadId
    );