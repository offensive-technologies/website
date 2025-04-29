[DllImport("ntdll.dll", SetLastError = true)]
static extern uint NtCreateThreadEx(
    out IntPtr ThreadHandle,
    uint DesiredAccess,
    IntPtr ObjectAttributes,
    IntPtr ProcessHandle,
    IntPtr StartRoutine,
    IntPtr Argument,
    uint CreateFlags,
    ulong ZeroBits,
    ulong StackSize,
    ulong MaximumStackSize,
    IntPtr AttributeList
    );