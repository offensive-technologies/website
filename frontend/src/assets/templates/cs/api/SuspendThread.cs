[DllImport("kernel32.dll", SetLastError = true)]
static extern uint SuspendThread(
    IntPtr hThread
    );