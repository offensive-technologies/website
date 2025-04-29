[DllImport("kernel32.dll", SetLastError = true)]
static extern uint QueueUserAPC(
    IntPtr pfnAPC,
    IntPtr hThread,
    UIntPtr dwData
    );