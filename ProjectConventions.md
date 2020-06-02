<pre>
/*
* Author: SeyyedMahdi Hassanpour
* Email: SeyyedKhandon@gmail.com 
*/
</pre>
<h1>Conventions in this project</h1>
<pre>
<strong>NamingConventions:</strong>
    camelCase: 
        Vuejs Composition-api Setup // setup(){const myVar = ref(10);}
        Vuejs Data-Model variables // hint-> data(){return{}}
        Vuejs Method names
        Vuejs props
        Vuejs Computed Properties
        Hook file's Name // useLocale.ts
    snake_case:
        Custom Function's local variables // eg: like: ()=>{ const my_var= 10;}
    UPPER_SNAKE_CASE:
       Special const names
    PascalCase:
        Components Name
        Modules
        Class
        Element ID
    kebab-case
    String Quotation:
        prettier base
</pre>
<pre>
<strong>Git Conventions:</strong>
you have 
    <em><b>Branches</b></em>:
        master
        develop
        unit_test
        hotfix
        regular jobs, like new features, extend something, bug fixes,etc...:
            feature_... like change_command_alarm, 
    <em><b>Tags</b></em>:
        ...
    <em><b>Commit messages</b></em>:
        WIP(Work in Progress):
            WIP:dev_3.0444: update command_byod_alarm, add DateTimePicker to inputField type's enums in bundled_policies 
        Done:
            Done:dev_3.0495: add min max for date time picker in json bundled and commands and DateTimePicker
        bugfix:
            Bugfix:dev_3.0502: fix "invalid date" by reset date button, remove mocked instructions, remove un-necessary addMinDateTime
        Other:
            change none-direct-src files, like add configuration, plugins, structures,... 
</pre>

