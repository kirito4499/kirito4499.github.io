(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{321:function(n,t,s){"use strict";s.r(t);var a=s(6),e=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[n._v("Tóm tắt")]),n._v(" "),t("p",[n._v("Bài viết này chủ yếu giới thiệu hướng đối tượng Java OOP và sơ đồ quan hệ UML")])]),n._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_3-đac-điem-chinh-cua-oop"}},[n._v("3 Đặc điểm chính của OOP")]),t("ul",[t("li",[t("a",{attrs:{href:"#đong-goi-encapsulation"}},[n._v("Đóng gói (Encapsulation)")])]),t("li",[t("a",{attrs:{href:"#ke-thua-inheritance"}},[n._v("Kế thừa (Inheritance)")])]),t("li",[t("a",{attrs:{href:"#đa-hinh-polymorphism"}},[n._v("Đa hình (Polymorphism)")])])])]),t("li",[t("a",{attrs:{href:"#so-đo-lop-uml"}},[n._v("Sơ đồ lớp UML")]),t("ul",[t("li",[t("a",{attrs:{href:"#tong-quat-hoa-generalization"}},[n._v("Tổng quát hoá (Generalization)")])]),t("li",[t("a",{attrs:{href:"#hien-thuc-hoa-realization"}},[n._v("Hiện thực hóa (Realization)")])]),t("li",[t("a",{attrs:{href:"#tong-hop-aggregation"}},[n._v("Tổng hợp (Aggregation)")])]),t("li",[t("a",{attrs:{href:"#thanh-phan-composition"}},[n._v("Thành phần (Composition)")])]),t("li",[t("a",{attrs:{href:"#su-ket-hop-association"}},[n._v("Sự kết hợp (Association)")])]),t("li",[t("a",{attrs:{href:"#su-phu-thuoc-dependency"}},[n._v("Sự phụ thuộc (Dependency)")])])])]),t("li",[t("a",{attrs:{href:"#tham-khao"}},[n._v("Tham khảo")])])])]),t("p"),n._v(" "),t("h2",{attrs:{id:"_3-đac-điem-chinh-cua-oop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-đac-điem-chinh-cua-oop"}},[n._v("#")]),n._v(" 3 Đặc điểm chính của OOP")]),n._v(" "),t("h3",{attrs:{id:"đong-goi-encapsulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#đong-goi-encapsulation"}},[n._v("#")]),n._v(" Đóng gói (Encapsulation)")]),n._v(" "),t("p",[n._v("Sử dụng các kiểu dữ liệu trừu tượng để đóng gói dữ liệu ("),t("strong",[n._v("attribute")]),n._v(") và các hành động ("),t("strong",[n._v("method")]),n._v(") dựa trên dữ liệu lại với nhau để tạo thành một thực thể độc lập ("),t("strong",[n._v("class")]),n._v(") không thể phân chia. Dữ liệu được bảo vệ trong kiểu dữ liệu trừu tượng, các chi tiết bên trong được ẩn càng nhiều càng tốt và chỉ một số phương thức được thiết kế để kết nối nó với bên ngoài. Người dùng không cần biết thông tin chi tiết dữ liệu bên trong của đối tượng, nhưng có thể truy cập đối tượng thông qua giao diện được cung cấp bởi đối tượng.")]),n._v(" "),t("p",[n._v("Lớp Person sau đây đóng gói các thuộc tính như tên, giới tính, tuổi, v.v. Bên ngoài chỉ có thể lấy thuộc tính name và thuộc tính gender của đối tượng Person thông qua phương thức get(), nhưng không thể lấy thuộc tính age mà phải lấy thuộc tính age có thể được sử dụng bởi phương thức work().")]),n._v(" "),t("p",[n._v("Lưu ý rằng thuộc tính giới tính được lưu trữ bằng kiểu dữ liệu int, việc đóng gói làm cho chi tiết triển khai này ẩn với người dùng. Và khi bạn cần sửa đổi kiểu dữ liệu được sử dụng bởi thuộc tính giới tính, bạn cũng có thể làm như vậy mà không ảnh hưởng đến mã khách hàng.")]),n._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Person")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("private")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("String")]),n._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("private")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("int")]),n._v(" gender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("private")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("int")]),n._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("String")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("return")]),n._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("String")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("getGender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("return")]),n._v(" gender "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("==")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("?")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"man"')]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"woman"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("work")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("18")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<=")]),n._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<=")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('" is working very hard!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("else")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('" can\'t work any more!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br")])]),t("h3",{attrs:{id:"ke-thua-inheritance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ke-thua-inheritance"}},[n._v("#")]),n._v(" Kế thừa (Inheritance)")]),n._v(" "),t("p",[n._v("Tính kế thừa cho phép xây dụng một lớp mới ("),t("strong",[n._v("Sub Class")]),n._v("), kế thừa và tái sử dụng các thuộc tính phương thức dựa trên lớp cũ ("),t("strong",[n._v("Super Class")]),n._v(") đã có trước đó.")]),n._v(" "),t("p",[n._v("Tính kế thừa thể hiện mối quan hệ "),t("strong",[n._v("IS-A")]),n._v(". Ví dụ: Mèo và Động vật là mối quan hệ "),t("strong",[n._v("IS-A")]),n._v(", vì vậy Mèo có thể kế thừa từ Động vật để có được các thuộc tính và phương thức không riêng tư của Động vật.")]),n._v(" "),t("p",[n._v("Các lớp con kế thừa toàn bộ thành phần của lớp cha và không cần phải đinh nghĩa lại. Lớp con có thể mở rộng các thành phần kế thừa hoặc bổ sung những thanh phần mới.")]),n._v(" "),t("p",[n._v("Cat có thể được dùng như Animal, tức là bạn có thể dùng Animal để chỉ đối tượng Cat. Một tham chiếu lớp cha trỏ đến một đối tượng lớp con được  gọi là "),t("strong",[n._v("upcasting")]),n._v(".")]),n._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Animal")]),n._v(" animal "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Cat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br")])]),t("h3",{attrs:{id:"đa-hinh-polymorphism"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#đa-hinh-polymorphism"}},[n._v("#")]),n._v(" Đa hình (Polymorphism)")]),n._v(" "),t("p",[n._v("Tính đa hình cho phép các đối tượng khác nhau thực thi chức năng giống nhau theo những cách khác nhau.")]),n._v(" "),t("p",[n._v("Đa hình được chia thành đa hình thời gian biên dịch và đa hình thời gian chạy:")]),n._v(" "),t("ul",[t("li",[n._v("Tính đa hình thời gian biên dịch chủ yếu đề cập đến việc nạp chồng phương thức")]),n._v(" "),t("li",[n._v("Tính đa hình thời gian chạy có nghĩa là kiểu cụ thể được trỏ đến bởi một tham chiếu đối tượng được xác định trong một chương trình được xác định trong thời gian chạy")])]),n._v(" "),t("p",[n._v("Tính đa hình thời gian chạy có ba điều kiện:")]),n._v(" "),t("ul",[t("li",[n._v("Kế thừa")]),n._v(" "),t("li",[n._v("Ghi đè ("),t("strong",[n._v("Override")]),n._v(")")]),n._v(" "),t("li",[n._v("Upcasting")])]),n._v(" "),t("p",[n._v("Trong đoạn mã dưới đây, lớp Instrument có hai lớp con: Wind và Percussion, cả hai đều ghi đè phương thức play () của cha mẹ và sử dụng Instrument của cha trong phương thức main () để tham chiếu đến các đối tượng Wind và Percussion. Khi phương thức play () được gọi trên một tham chiếu Instrument, phương thức play () của lớp đối tượng được tham chiếu thực tế sẽ được thực thi, không phải phương thức của lớp Instrument.")]),n._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Instrument")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("play")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Instrument is playing..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Wind")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("extends")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Instrument")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("play")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Wind is playing..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Percussion")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("extends")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Instrument")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("play")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"Percussion is playing..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Music")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("static")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Instrument")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(">")])]),n._v(" instruments "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        instruments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Wind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        instruments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Percussion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("for")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Instrument")]),n._v(" instrument "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" instruments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            instrument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("play")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br")])]),t("h2",{attrs:{id:"so-đo-lop-uml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#so-đo-lop-uml"}},[n._v("#")]),n._v(" Sơ đồ lớp UML")]),n._v(" "),t("p",[n._v("Sơ đồ lớp sau sử dụng "),t("a",{attrs:{href:"https://www.planttext.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("PlantUML"),t("OutboundLink")],1),n._v(". Về cách vẽ, vui lòng tham khảo tại: http://plantuml.com/ để biết thêm cú pháp và cách sử dụng.")]),n._v(" "),t("h3",{attrs:{id:"tong-quat-hoa-generalization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tong-quat-hoa-generalization"}},[n._v("#")]),n._v(" Tổng quát hoá (Generalization)")]),n._v(" "),t("p",[n._v("Để mô tả một mối quan hệ kế thừa, sử dụng từ khóa "),t("strong",[n._v("extends")]),n._v(" trong Java.")]),n._v(" "),t("p",[t("img",{attrs:{src:"/img/java/generalization.svg",alt:""}})]),n._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[n._v("@startuml\n\ntitle Generalization\n\nclass Vehical\nclass Car\nclass Truck\n\nVehical "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- Car\nVehical "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v("-- Truck\n\n@enduml\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br")])]),t("h3",{attrs:{id:"hien-thuc-hoa-realization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hien-thuc-hoa-realization"}},[n._v("#")]),n._v(" Hiện thực hóa (Realization)")]),n._v(" "),t("p",[n._v("Để triển khai một "),t("strong",[n._v("interface")]),n._v(", sử dụng từ khóa "),t("strong",[n._v("implements")]),n._v(" trong Java.")]),n._v(" "),t("p",[t("img",{attrs:{src:"/img/java/Realization.svg",alt:""}})]),n._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[n._v("@startuml\n\ntitle Realization\n\ninterface MoveBehavior\nclass Fly\nclass Run\n\nMoveBehavior "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(" Fly\nMoveBehavior "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(" Run\n\n@enduml\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br")])]),t("h3",{attrs:{id:"tong-hop-aggregation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tong-hop-aggregation"}},[n._v("#")]),n._v(" Tổng hợp (Aggregation)")]),n._v(" "),t("p",[n._v("Tổng thể bao gồm các bộ phận, nhưng tổng thể và các bộ phận không phụ thuộc mạnh mẽ, và các bộ phận sẽ vẫn tồn tại nếu tổng thể không tồn tại.")]),n._v(" "),t("p",[t("img",{attrs:{src:"/img/java/Aggregation.svg",alt:""}})]),n._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[n._v("@startuml\n\ntitle Aggregation\n\nclass Computer\nclass Keyboard\nclass Mouse\nclass Screen\n\nComputer o-- Keyboard\nComputer o-- Mouse\nComputer o-- Screen\n\n@enduml\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br")])]),t("h3",{attrs:{id:"thanh-phan-composition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thanh-phan-composition"}},[n._v("#")]),n._v(" Thành phần (Composition)")]),n._v(" "),t("p",[n._v("Không giống như tập hợp, tổng thể và các bộ phận trong bố cục phụ thuộc chặt chẽ, tổng thể không tồn tại và bộ phận không tồn tại.")]),n._v(" "),t("p",[n._v("Ví dụ, các công ty và các phòng ban, công ty không tồn tại nếu không có các phòng ban. Nhưng công ty và người lao động thuộc quan hệ cộng gộp, vì công ty vẫn chưa có nhân viên.")]),n._v(" "),t("p",[t("img",{attrs:{src:"/img/java/Composition.svg",alt:""}})]),n._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[n._v("@startuml\n\ntitle Composition\n\nclass Company\nclass DepartmentA\nclass DepartmentB\n\nCompany *-- DepartmentA\nCompany *-- DepartmentB\n\n@enduml\n  \n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br")])]),t("h3",{attrs:{id:"su-ket-hop-association"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#su-ket-hop-association"}},[n._v("#")]),n._v(" Sự kết hợp (Association)")]),n._v(" "),t("p",[n._v("Là sự liên kết giữa các đối tượng thuộc các lớp khác nhau mà không lớp nào sở hữu lớp nào. Vòng đời các thể hiện của 2 class thì độc lập nhau và không có mối quan hệ sở hữu nào. Nó cũng có thể được biểu diễn bằng các mối quan hệ 1-1, 1-n và n-n.")]),n._v(" "),t("p",[n._v("Ví dụ, sinh viên và trường học là một mối quan hệ liên kết. Một trường học có thể có nhiều sinh viên, nhưng một sinh viên chỉ thuộc về một trường, vì vậy đây là mối quan hệ nhiều-một có thể được xác định trước khi hoạt động bắt đầu.")]),n._v(" "),t("p",[t("img",{attrs:{src:"/img/java/Association.svg",alt:""}})]),n._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[n._v("@startuml\n\ntitle Association\n\nclass School\nclass Student\n\nSchool "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"1"')]),n._v(" - "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"n"')]),n._v(" Student\n\n@enduml\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br")])]),t("h3",{attrs:{id:"su-phu-thuoc-dependency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#su-phu-thuoc-dependency"}},[n._v("#")]),n._v(" Sự phụ thuộc (Dependency)")]),n._v(" "),t("p",[n._v("Không giống như các liên kết, các phụ thuộc hoạt động trong thời gian chạy. Có ba dạng phụ thuộc chính giữa các lớp A và B:")]),n._v(" "),t("ul",[t("li",[n._v("Lớp A là một biến cục bộ (của một phương thức) trong lớp B")]),n._v(" "),t("li",[n._v("Lớp A là một tham số trong phương thức của lớp B")]),n._v(" "),t("li",[n._v("Lớp A gửi một thông điệp đến lớp B, do đó ảnh hưởng đến lớp B để thay đổi")])]),n._v(" "),t("p",[t("img",{attrs:{src:"/img/java/Dependency.svg",alt:""}})]),n._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[n._v("@startuml\n\ntitle Dependency\n\nclass Vehicle "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    move"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("MoveBehavior"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\ninterface MoveBehavior "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    move"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\nnote "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"MoveBehavior.move()"')]),n._v(" as N\n\nVehicle "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" MoveBehavior\n\nVehicle "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(" N\n\n@enduml\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br")])]),t("h2",{attrs:{id:"tham-khao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tham-khao"}},[n._v("#")]),n._v(" Tham khảo")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.pdai.tech/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.pdai.tech/"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://www.w3schools.com/java/java_oop.asp",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.w3schools.com/java/java_oop.asp"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);