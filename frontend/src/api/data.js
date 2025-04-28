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
        title: "Offensive-Technologies Recon Software Division", 
        text: "Actionable knowledge drives every successful engagement. \
        The Recon Software division builds and curates tooling for open-source \
        intelligence and in-system enumeration—from surface-level footprinting \
        to deep privilege-escalation mapping. Our aim is to furnish defenders-through-offense \
        with precise, minimally intrusive discovery mechanisms that shorten assessment cycles \
        and reduce guesswork. We emphasize clarity of output and transparency of methodology, \
        so findings translate directly into remediation steps. Ultimately, our goal is to make \
        reconnaissance a disciplined, repeatable science that benefits organizations and individuals alike."
    }, 
    {
        img: aboutDeceive,
        title: "Offensive-Technologies Deceiving Software Division ",
        text: "Human behavior remains the most unpredictable variable in any security equation.\
         Our Deceiving Software division studies, simulates, and safely weaponizes \
         social-engineering vectors that target everyday habits—phishing lures, interface \
         misdirection, and other cognitive loopholes. By replicating these tactics in controlled \
         environments, we enable red-teamers and awareness programs to inoculate users against \
         the real thing. We approach this work with respect for the people we study, focusing \
         on insight and education rather than spectacle. If users emerge a little more skeptical \
         and a lot more resilient, we’ve done our job."
    },
    {
        img: aboutAttack,
        title: "Offensive-Technologies Attacking Software Division",
        text: "Our Attacking Software division exists to explore \
        the real-world security gaps that affect private users \
        every day. We rigorously research and exercise consumer-grade \
        operating systems, applications, and connected devices to reveal \
        vulnerabilities before hostile actors exploit them. Our objective \
        is straightforward: provide security professionals with ethically \
        sourced insights and controlled offensive capabilities that raise \
        the baseline of personal digital safety. We measure success not by \
        headline-grabbing exploits, but by the quiet hardening that happens \
        once weaknesses are exposed and responsibly reported."
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