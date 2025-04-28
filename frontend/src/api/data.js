import aboutRecon from '../assets/images/about-recon.png';
import aboutDeceive from '../assets/images/about-deceive.png';
import aboutAttack from '../assets/images/about-attack.png';
import templatesImage from '../assets/images/templates.png';
import algorithmsImage from '../assets/images/algorithms.png';
import reconImage from '../assets/images/recon.png';
import deceiveImage from '../assets/images/deceive.png';
import attackImage from '../assets/images/attack.png';


export const about_blocks = [
    {
        img: aboutRecon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque \
        rhoncus erat non facilisis. Vestibulum gravida sem laoreet, gravida urna vel, \
        venenatis felis. Ut tincidunt nulla vel orci malesuada faucibus. Donec non tellus \
        felis. Cras eleifend odio orci, ut dictum quam vulputate eu. Aliquam hendrerit \
        neque odio, eu condimentum orci condimentum a. Integer ut luctus ligula. \
        Suspendisse a gravida justo. Praesent massa massa, congue ac nunc at, consequat \
        auctor libero. Maecenas risus arcu, congue nec metus vitae, cursus ullamcorper lacus. \
        Quisque et augue et sapien aliquam pellentesque nec eget orci. Sed consectetur \
        odio vel vestibulum ullamcorper."
    }, 
    {
        img: aboutDeceive,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque \
        rhoncus erat non facilisis. Vestibulum gravida sem laoreet, gravida urna vel, \
        venenatis felis. Ut tincidunt nulla vel orci malesuada faucibus. Donec non tellus \
        felis. Cras eleifend odio orci, ut dictum quam vulputate eu. Aliquam hendrerit \
        neque odio, eu condimentum orci condimentum a. Integer ut luctus ligula. \
        Suspendisse a gravida justo. Praesent massa massa, congue ac nunc at, consequat \
        auctor libero. Maecenas risus arcu, congue nec metus vitae, cursus ullamcorper lacus. \
        Quisque et augue et sapien aliquam pellentesque nec eget orci. Sed consectetur \
        odio vel vestibulum ullamcorper."
    },
    {
        img: aboutAttack,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque \
        rhoncus erat non facilisis. Vestibulum gravida sem laoreet, gravida urna vel, \
        venenatis felis. Ut tincidunt nulla vel orci malesuada faucibus. Donec non tellus \
        felis. Cras eleifend odio orci, ut dictum quam vulputate eu. Aliquam hendrerit \
        neque odio, eu condimentum orci condimentum a. Integer ut luctus ligula. \
        Suspendisse a gravida justo. Praesent massa massa, congue ac nunc at, consequat \
        auctor libero. Maecenas risus arcu, congue nec metus vitae, cursus ullamcorper lacus. \
        Quisque et augue et sapien aliquam pellentesque nec eget orci. Sed consectetur \
        odio vel vestibulum ullamcorper."
    }
]

//  library data

export const library_blocks = [
    {
        img: templatesImage,
        title: "templates",
        table: "templates"
    },
    {
        img: algorithmsImage,
        title: "algorithms",
        table: "algorithms"
    }
];

export const library_suggestions = [
    { title: "Authentication" },
    { title: "Authorization" },
    { title: "Database Models" },
    { title: "API Endpoints" },
    { title: "Frontend Components" },
    { title: "State Management" },
    { title: "Routing" },
    { title: "Form Validation" },
    { title: "Error Handling" },
    { title: "File Uploads" },
    { title: "Responsive Design" },
    { title: "Testing Utilities" },
    { title: "Performance Optimization" },
    { title: "Logging System" },
    { title: "Notifications" }
];
  

export const languages = [
    {
        id: 1,
        name: "C", 
    },
    {
        id: 2,
        name: "C#", 
    },
    {
        id: 3,
        name: "VBA", 
    },
    {
        id: 4,
        name: "PS1", 
    }
]

// tools data
export const tools_blocks = [
    {
        img: reconImage,
        title: "Recon"
    },
    {
        img: deceiveImage,
        title: "Deceive"
    },
    {
        img: attackImage,
        title: "Attack"
    }
];

export const unavailables = [
    "Segmentation fault at invalid memory address, core dumped",
    "Attempted access to unmapped memory region",
    "Symbol not found in current scope",
    "Compilation terminated failed to resolve external resource",
    "Jump to invalid instruction pointer, execution halted",
    "Memory access violation at address 0xDEADC0DE",
    "Illegal memory read at address 0x0, null dereference",
    "Attempted fetch from /dev/null, no data returned",
    "Page table entry not present, segmentation fault",
    "Pointer arithmetic resulted in out-of-bounds access",
    "Failed to load resource, resource pointer is null",
    "Stack overflow detected, invalid return address",
    "Virtual address translation failed, page not present",
    "Null function pointer invoked",
    "Attempted execution of uninitialized function pointer",
    "Out-of-bounds read in static array",
    "Corrupted call stack detected, return address invalid",
    "Control flow integrity check failed, invalid jump target",
    "Instruction pointer outside valid code segment",
    "Uninitialized variable used in memory access",
    "Invalid system call attempted",
    "Non-canonical address access attempted",
    "Kernel panic, invalid memory access",
    "Segmentation fault at address 0x00000000, null dereference",
    "Attempted access beyond heap boundary",
    "Invalid pointer subtraction, result out of bounds",
    "Program counter jumped to unmapped address",
    "Process terminated due to illegal opcode execution",
    "Failed to allocate memory out of heap space",
    "Segmentation violation, attempted stack expansion beyond limits",
    "Page not present in memory map",
    "Address resolution failed, resource does not exist",
    "Invalid memory segment access detected",
    "Unresolved external reference",
    "Null dereference encountered during memory access",
    "Virtual memory address invalid",
    "Failed to resolve symbol, undefined reference",
    "Address space exhausted, no mapping available",
    "Invalid relocation address in binary",
    "Physical memory address outside allowable range",
    "Resource pointer corrupted, access denied"
];