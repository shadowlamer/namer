### Variable names generator.

#### Usage
```
    npm install 
    npm start -- [parameters] <short variable description>
```

Where "parameters" can be:
```
    -c    Capitalization ("first", "all", "none", "preserve");
    -f    Case of first letter ("upper", "lower", "preserve");
    -l    Translate to specified language (two letters code, 'en' by default);
    -d    Delimiter;
    -p    Preset. Parameters override preset;
    -b    Prefix;
    -a    Postfix;
```
    
#### Examples
```
    npm start -- послать запрос   
    npm start -- -c all -d _ Hằng số tuyệt vời của tôi 
```
