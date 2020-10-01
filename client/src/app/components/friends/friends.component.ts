import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/Friend';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
  friends: Friend[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFriends().subscribe((data:any) => {
      if(data.success){
        console.log(data);
        this.friends = data.friends;
      }
    })
    // this.friends = [
    //   {
    //     id:171394675,
    //     first_name:"Danya",
    //     last_name:"Sergachev",
    //     domain:"id171394675",
    //     photo_200:"https:\/\/sun9-41.userapi.com\/impg\/c858524\/v858524098\/feb9f\/U7C4pwB8d-E.jpg?size=200x0&quality=88&crop=197,120,644,644&sign=0e0fc9e23624d8639c969ed0680e279c&c_uniq_tag=7TCtwIEjPpjJN_gM5pHuOSGlKRLc-4MuhUQb3ywCFK4&ava=1",
    //     online:0
    //   },
    //   {
    //     id:27364880,
    //     first_name:"Ivan",
    //     last_name:"Zeltin",
    //     domain:"id27364880",
    //     photo_200:"https:\/\/sun9-39.userapi.com\/impf\/c854016\/v854016089\/d1aec\/DCnNEd7P1po.jpg?size=200x0&quality=88&crop=170,170,409,409&sign=12c45328d2e41c1c6faf27d4197a79da&c_uniq_tag=F4I9X0CRZOOL8DhENAzhSA2jT_bRS7CjN5LLq2APFmE&ava=1",
    //     online:0
    //   },
    //   {
    //     id:14660064,
    //     first_name:"Alexander",
    //     last_name:"Gorbachev",
    //     domain:"id14660064",
    //     photo_200:"https:\/\/sun9-15.userapi.com\/impg\/L-8VJDzzBfAB-FVFffn2ckzvHuE8JM9SYhitVw\/BlhaR1ZQ4cs.jpg?size=200x0&quality=88&crop=810,271,1123,1123&sign=dd41b33038fae429495d5468f1a07bc9&c_uniq_tag=ykJJkrqrkPclEX9kc_vfnLLitrRWIE9gaKrJn1CJRpg&ava=1",
    //     online:0
    //   },
    //   {
    //     id:100780116,
    //     first_name:"Anya",
    //     last_name:"Bartuli",
    //     domain:"id100780116",
    //     photo_200:"https:\/\/sun9-28.userapi.com\/impf\/c847216\/v847216015\/d675a\/UQyWP--yfxs.jpg?size=200x0&quality=88&crop=156,825,645,645&sign=9f5520049f9d4a0b8d043ec3b662200f&c_uniq_tag=vtKPFuwuK16l8rU_nR1ezMsrHyp6ig1sZoqX1MZjmls&ava=1",
    //     online:0
    //   },
    //   {
    //     id:16584370,
    //     first_name:"Kirill",
    //     last_name:"Smirnov",
    //     domain:"onedayhero",
    //     photo_200:"https:\/\/sun9-40.userapi.com\/impf\/c848416\/v848416178\/bcf14\/w9Jw2Q4MafA.jpg?size=200x0&quality=88&crop=122,343,201,201&sign=da074e7fc17ea34a04b058e42cb68fb2&c_uniq_tag=309heyzV-7fxQdsTU23pNOyc_GwDQ7b_5x4nYP-vIKk&ava=1",
    //     online:1
    //   }
    // ];
    
  }

}
