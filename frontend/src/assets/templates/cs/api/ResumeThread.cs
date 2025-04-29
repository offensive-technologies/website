[DllImport("kernel32.dll", SetLastError = true)]
static extern uint ResumeThread(
    IntPtr hThread
    );