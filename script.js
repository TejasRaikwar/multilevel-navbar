const navOptions = [
  {
    title: "HOME",
    subItem: [],
  },
  {
    title: "MYPROFILE",
    subItem: [],
  },
  {
    title: "MY DESK",
    subItem: [
      {
        title: "HR",
        item: [
          {
            title: "PAPR",
            subItem: [
              {
                title: "PAPR-Darwin Box",
              },
              {
                title: "PAPR-Old",
              },
            ],
          },
        ],
      },
      {
        title: "Admin",
        item: [],
      },
      {
        title: "HR Travel Plus",
        item: [],
      },
      {
        title: "HR Learning Plus",
        item: [],
      },
      {
        title: "INWARD OUTWARD",
        item: [],
      },
      {
        title: "IOM Module",
        item: [],
      },
    ],
  },
  {
    title: "DMS",
    subItem: [],
  },
  {
    title: "CBS Report",
    subItem: [
      {
        title: "HR",
        item: [
          {
            title: "PAPR",
            subItem: [
              {
                title: "PAPR-Darwin Box",
              },
              {
                title: "PAPR-Old",
              },
            ],
          },
        ],
      },
      {
        title: "Admin",
        item: [],
      },
      {
        title: "HR Travel Plus",
        item: [],
      },
      {
        title: "HR Learning Plus",
        item: [],
      },
      {
        title: "INWARD OUTWARD",
        item: [],
      },
      {
        title: "IOM Module",
        item: [],
      },
    ],
  },
  {
    title: "COMMITEE",
    subItem: [],
  },
  {
    title: "BUSINESS WORKFLOW",
    subItem: [],
  },
  {
    title: "APPROVALS",
    subItem: [],
  },
];

const icon = document.createElement('i');
icon.classList.add('fa-solid', 'fa-angle-down'); 

let navbar = document.getElementById("menu");

navOptions.forEach((menuItem,index) => {
  let li = document.createElement("li");
  let link = document.createElement("a");
  link.href = "#";
  link.textContent = menuItem.title+" ";
  li.appendChild(link);
  // if(index==0){
  //   li.className="active";
  // }
  if (menuItem.subItem.length > 0) {
    link.innerHTML = menuItem.title + ' <i class="fa-solid fa-angle-down"></i>';
    let ul = document.createElement("ul");
    ul.className = "submenu";
    ul.setAttribute('id','submenu');

    menuItem.subItem.forEach((subItm) => {
      let li2 = document.createElement("li");
      let link2 = document.createElement("a");
      link2.href = "#";
      link2.textContent = subItm.title;
      li2.appendChild(link2);
      ul.appendChild(li2);
      li.appendChild(ul);

      if (subItm.item.length > 0) {
        link2.innerHTML = subItm.title + ' <i class="fa-solid fa-angle-down rotate""></i>';     
        let ul3 = document.createElement("ul");
        ul3.className = "submenu2-menu";

        subItm.item.forEach((itm) => {
          let li3 = document.createElement("li");
          let link3 = document.createElement("a");
          link3.href = "#";
          link3.textContent = itm.title;
          li3.appendChild(link3);
          ul3.appendChild(li3);
          li2.appendChild(ul3);

          if (itm.subItem.length > 0) {
            link3.innerHTML = itm.title + ' <i class="fa-solid fa-angle-down rotate" "></i>';
            let ul4 = document.createElement("ul");
            ul4.className = "submenu2-menu-menu";
            itm.subItem.forEach((subbItem) => {
              let li4 = document.createElement("li");
              let link4 = document.createElement("a");
              link4.href = "#";
              link4.textContent = subbItem.title;
              li4.appendChild(link4);
              ul4.appendChild(li4);
              li3.appendChild(ul4);
            });
          }
        });
      }
    });
  }
  navbar.appendChild(li);
});


function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}