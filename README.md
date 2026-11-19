📘 Aaditya Angular Learning Hub
My personal Angular training project with routing, forms, animations, and Material UI.

This repository showcases my ongoing Angular learning journey.
It contains multiple standalone components, routing setups, reusable UI widgets, Angular Material layouts, multi-step form flows, animations, data tables, API integration examples, and more — all organized for clarity and future reference.

### 🚀 Welcome Animation Screen
<img width="1350" height="630" alt="Welcome Screen" src="https://github.com/user-attachments/assets/ca9d1ac0-7fe6-4521-9ce9-e1a71b59eeb2" />

🚀 Features Included
✔ Complete Angular 18 Learning Playground
Routing & nested routing (standalone component-based routing)
Navigation with mat-tab, custom menus, and route-to-route data transfer
Parent → child communication (@Input)
Child → parent communication (@Output + EventEmitter)
Route parameters and dynamic loading
Shared services (BehaviorSubject for component communication)

✔ Angular Material UI
Material form fields
Material table (mat-table)
Pagination, sorting
Material popup dialogs (MatDialog)
Snack bars for notifications
Datepickers with server/SSR-safe usage
Cards, grids, responsive layouts

✔ Reusable Components
Dynamic alert/notification component
Popup modal component
Reusable form sections

✔ Forms
Reactive Forms
Template-driven forms
Validation and conditional enabling/disabling of buttons
Multi-step forms (Register → Register2 → Register3 → Register4)

✔ Animations & UI Enhancements
Terminal-style welcome animation (SYSTEM BOOTING… User: Aaditya)
Blackhole / particle animation experiments
Loader effects
Smooth transitions

✔ API Integration
GET / POST API examples using HttpClient
Generic REST service
JSON-server mock API (db.json)
Display API results in a Material table
Handling long text formatting & UI alignment

✔ Practice Modules (Segregation Folder)
Component-to-component data passing
Parent routed → child routed cases
Parent non-routed → child routed
Understanding route parameters deeply

✔ HashBoard Components
Job Info
Family Info
Courses module
Form submissions & data flows
Material layout visual consistency

✔ Other Angular Concepts Covered
Pipes (custom na pipe)
Observables, Subjects & BehaviorSubject
Form validation patterns
MatTable dataSource binding
MatDialog injection fixes

## 📁 Project Folder Structure

```
aaditya_training/
│
├── src/app/
│   ├── Animations/
│   │   └── welcome/
│   ├── Dashboard/
│   │   ├── account/
│   │   ├── dynamic-form/
│   │   ├── get-api.component/
│   │   ├── home/
│   │   ├── page/
│   │   ├── pipe/
│   │   ├── register/
│   │   ├── register2/
│   │   ├── register3/
│   │   ├── register4/
│   │   └── reusable-component/
│   ├── data/
│   │   └── db.json
│   ├── HashBoard/
│   │   ├── courses/
│   │   ├── family-info/
│   │   └── job-info/
│   ├── model/
│   ├── popup/
│   ├── Segregation/
│   │   ├── component-1/
│   │   ├── component-2/
│   │   └── component-3/
│   ├── service/
│   └── services/
│
├── angular.json
├── package.json
├── README.md
└── tsconfig.json
```

🛠️ Tech Stack
Angular 18
TypeScript
Angular Material
RxJS
Standalone Components
JSON Server (Mock APIs)
Bootstrap (for some styling)
SCSS/CSS animations

▶️ How to Run This Project
git clone https://github.com/<your-username>/<your-repo>.git
cd aaditya_training
npm install
npm start
App will run at:http://localhost:4200/
 node -v: v22.19.0 
 ng version:
 
Angular CLI: 18.2.21
Node: 22.19.0
Package Manager: npm 10.9.3
OS: win32 x64

Angular: 18.2.14
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic
... platform-server, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1802.21
@angular-devkit/build-angular   18.2.21
@angular-devkit/core            18.2.21
@angular-devkit/schematics      18.2.21
@angular/cli                    18.2.21
@angular/ssr                    18.2.21
@schematics/angular             18.2.21
rxjs                            7.8.2
typescript                      5.5.4
zone.js                         0.14.10
