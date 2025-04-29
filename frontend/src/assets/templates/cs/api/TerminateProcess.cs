[DllImport("kernel32.dll", SetLastError = true)]
static extern bool TerminateProcess(
    IntPtr hProcess,
    uint uExitCode
    );