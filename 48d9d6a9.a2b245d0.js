(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{160:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return a})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return l}));var n=o(2),i=o(9),r=(o(0),o(212)),s={id:"why-gns3-uses-uuid",title:"Why does GNS3 use UUIDs?",sidebar_label:"Why does GNS3 use UUIDs?"},a={id:"using-gns3/design/why-gns3-uses-uuid",isDocsHomePage:!1,title:"Why does GNS3 use UUIDs?",description:"A commonly asked  question about GNS3, is why I can\u2019t easily find the files of a node or project names on disk. It\u2019s due to the usage of UUIDs in folder naming.",source:"@site/docs/using-gns3/design/why-gns3-uses-uuid.md",permalink:"/docs/using-gns3/design/why-gns3-uses-uuid",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/design/why-gns3-uses-uuid.md",sidebar_label:"Why does GNS3 use UUIDs?",sidebar:"someSidebar",previous:{title:"Architecture",permalink:"/docs/using-gns3/design/architecture"},next:{title:"Which emulator should I use?",permalink:"/docs/emulators/which-emulators-should-i-use"}},c=[{value:"What is a UUID?",id:"what-is-a-uuid",children:[]},{value:"Why use UUIDs?",id:"why-use-uuids",children:[]},{value:"Node UUID in folders",id:"node-uuid-in-folders",children:[]},{value:"Project UUIDs on a remote server",id:"project-uuids-on-a-remote-server",children:[]},{value:"User or third parties application are not supposed to directly interact with files",id:"user-or-third-parties-application-are-not-supposed-to-directly-interact-with-files",children:[{value:"What is on disk is not necessarily what is in the VM",id:"what-is-on-disk-is-not-necessarily-what-is-in-the-vm",children:[]},{value:"Modification on disk could be lost",id:"modification-on-disk-could-be-lost",children:[]},{value:"Modification on disk could corrupt the node",id:"modification-on-disk-could-corrupt-the-node",children:[]},{value:"Data could be on another server",id:"data-could-be-on-another-server",children:[]}]}],u={rightToc:c};function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A commonly asked  question about GNS3, is why I can\u2019t easily find the files of a node or project names on disk. It\u2019s due to the usage of UUIDs in folder naming."),Object(r.b)("h2",{id:"what-is-a-uuid"},"What is a UUID?"),Object(r.b)("p",null,"A UUID is a 128-bit number. The generation of a UUID doesn\u2019t require a central registration authority in order to be almost unique, while providing a low probability of collisions. In GNS3, we represent a UUID in this manner: 42a1b682-b5bf-4de4-b5af-5366fc20a111."),Object(r.b)("p",null,"More information about UUIDs can be found here: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"}),"https://en.wikipedia.org/wiki/Universally_unique_identifier")),Object(r.b)("h2",{id:"why-use-uuids"},"Why use UUIDs?"),Object(r.b)("p",null,"Because UUIDs are unique, you can be assured that a UUID for a project or node on your computer is not in use on another computer. This allows the sharing of projects without conflicts. Otherwise, it\u2019s highly probable that the same names for nodes or projects will be used, causing potential conflicts.  "),Object(r.b)("h2",{id:"node-uuid-in-folders"},"Node UUID in folders"),Object(r.b)("p",null,"If you list the files of a project,  you will see that the nodes folder uses UUID:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"# ls -R myproject\nproject-files tutu.gns3\n\nmyproject/project-files:\nvpcs\n\nmyproject/project-files/vpcs:\n1c18e765-0107-4083-b371-a92d490eb8a0\n4349251e-1d91-454f-9d89-c998cbfa90c9\n\nmyproject/project-files/vpcs/1c18e765-0107-4083-b371-a92d490eb8a0:\nstartup.vpc\n\nmyproject/project-files/vpcs/4349251e-1d91-454f-9d89-c998cbfa90c9:\nstartup.vpc\n")),Object(r.b)("p",null,"The UUID for a node is stable and will never change."),Object(r.b)("p",null,"The main reason for using UUIDs instead of names, is that most emulators don\u2019t support changing the path of their files while the emulator is running. If you want to rename a node and change the path of a folder, you\u2019d need to stop the node and restart it."),Object(r.b)("p",null,"The second reason, is that some emulators have restrictions on the characters in the path. By using UUIDs, the user doesn\u2019t need to care about that."),Object(r.b)("h2",{id:"project-uuids-on-a-remote-server"},"Project UUIDs on a remote server"),Object(r.b)("p",null,"When you use GNS3 on your local computer, you can choose the location of the project files. It\u2019s for backward compatibility, and to allow user to freeup  disk space without starting GNS3. However,  on a remote server, all projects are in the same directory,  with a UUID as their name."),Object(r.b)("p",null,"The first reason is to avoid problems when renaming/copy a project. Second reason is to prevent problem if the remote server filesystem doesn\u2019t support UTF-8."),Object(r.b)("p",null,"This also allows running multiple GNS3 servers using the same shared projects folder,  without the risk of collision. In the future, it should be possible to support multiple users with same project name, sharing a common server."),Object(r.b)("h2",{id:"user-or-third-parties-application-are-not-supposed-to-directly-interact-with-files"},"User or third parties application are not supposed to directly interact with files"),Object(r.b)("p",null,"There's a reason for GNS3 not consider the need to have a user friendly file system. Nobody should directly interact with what is contained in the folder. It\u2019s internal to GNS3,  and there are good reasons for this. GNS3 provides tools to export or edit files,  and you need to use them. If you build a third party's application, use the API to apply your modification(s). You can find more information over at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://api.gns3.net/"}),"http://api.gns3.net/"),"."),Object(r.b)("h3",{id:"what-is-on-disk-is-not-necessarily-what-is-in-the-vm"},"What is on disk is not necessarily what is in the VM"),Object(r.b)("p",null,"If you browse the disk, you will see stuff that could be the configuration file of the node. But this not always synced, and for various reasons, they could be out of sync. This is normal. You could have a delay when you save in the emulator,  and when GNS3 is notified about the changes and dumps the configuration on disk."),Object(r.b)("h3",{id:"modification-on-disk-could-be-lost"},"Modification on disk could be lost"),Object(r.b)("p",null,"What you change on disk could be lost at the next sync."),Object(r.b)("h3",{id:"modification-on-disk-could-corrupt-the-node"},"Modification on disk could corrupt the node"),Object(r.b)("p",null,"This is the worst case scenario. A user could be modifying something on disk outside GNS3, and GNS3 attempts to write the file at the same time. This could corrupt the files. Some configuration file modifications can even crash the emulator."),Object(r.b)("h3",{id:"data-could-be-on-another-server"},"Data could be on another server"),Object(r.b)("p",null,"If you split up your project on multiple servers,  the data could be spread across all of them. If you use the API,  this won\u2019t be a concern."))}l.isMDXComponent=!0},212:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return f}));var n=o(0),i=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(o),p=n,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return o?i.a.createElement(f,a(a({ref:t},u),{},{components:o})):i.a.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var u=2;u<r;u++)s[u]=o[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);