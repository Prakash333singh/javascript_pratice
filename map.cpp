// #include<bits\stdc++.h>
// using namespace std;
// int main()
// {
// map<int,int>mp;
// mp.insert({1,10});
// mp.insert({2,20});
// if(mp.find(2)!=mp.end())
// cout<<"true"<<endl;


//     return 0;
// }
// CPP program to illustrate substr()
#include <string.h>
#include <iostream>
using namespace std;

int main()
{
	// Take any string
	string s1 = "adhikari";

	// Copy two characters of s1 (starting
	// from position 3)
	string r = s1.substr(0, 3);

	// prints the result
	cout << "String is: " << r;

	return 0;
}
