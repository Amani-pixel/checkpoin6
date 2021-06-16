function longPhrase( n: integer ) : integer ;
var ch1 = string;
BEGIN 
Read(ch1);
n=length[ch1];
Write(n);
END
//fonction nbrmot
function nbrmot( ch1: string ) : integer ;
var i=integer;
nbr=integr:=0;
BEGIN 
read(ch1);

for i := 1 to length[ch1] do

if(ch[i]="")then 
nbr=(nbr+1)+1;
FIN 
//Fonction voyelle
function voyelle  (ch:string):integer;
var i=intger;
nbrv=intger
BEGIN 
read(ch1);

for i from 1 to length[ch1] do
if ch[i] in['a','e','i','y','o','u']then
nbrv=nbrv+1;
END