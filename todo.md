Wednesday
- ~~add the flattening function~~
- ~~the flattening function must create a unique identifier for each flat item (maybe using its code (1.1.1.322))~~
- ~~add the state for storing the list~~
- ~~derive the data using the flattening function to get the list and count~~
- ~~add the trash icon~~
- ~~create items UI~~
- ~~create the fields in the create account screen~~
- ~~create validation in the fields~~

Thursday
- ~~add field validation using yup and formik~~
- ~~in the insert account action button, modify the nested state using the immer.js lib to get the new immutable state. (produce)~~
- ~~do the suggestion logic after selecting the parent account~~
- ~~finish modal UI~~
- ~~differ colors in account listing based on account type~~
- ~~after everything working in the creating and deleting, insert some db for storing this data~~
- ~~the db must store just the list. (realmdb?)~~
- ~~add scrollviews to where is needed~~
- ~~create the modal UI and functionality~~
- ~~render the items in a flatlist~~
- ~~add a validation rule to prevent changing isRevenue if has children~~
- ~~add a validation rule to prevent changing launch to true if has children~~
- ~~the isRevenue validation difference from parent must be shown in the isRevenue select~~
- ~~add account code in the header when editing~~
- ~~make the search work~~ 
- ~~clean the code, removing commentary and logs~~

Friday
- generate the apk

extras:
- make the searchbar floating
- outline in red fields that has errors
- add a mask in the text for enter account code
- add the rubik font
- find better icons for create and back icons
- add placeholder to texts
- (peharps using some hook to improve performance and debounce)