'use strict';

commonModule.constant('URI', {
    'resources': {
        'users': '../../../api/users',
        'bottoms': '../../../api/bottoms'
    }
});

commonModule.constant('NavItem', {
    // NavLv1: header, NavLv2: menuItem, NavLv3: subMenuItem
    // note: set menuItem 'href' prop to be empty when it has subMenuItems
    'Home': {
        name: "首页",
        href: "./mainCenter.htm",
        menuItems: [{
            index: 0,
            name: "测试-1",
            href: "./mainCenter.htm#/main/test1",
            icon: "fa-star",
        }, {
            index: 1,
            name: "测试-2",
            href: "./mainCenter.htm#/main/test2",
            icon: "fa-twitter-square"
        },{
            index: 2,
            name: "测试-3",
            href: "./mainCenter.htm#/main/test3",
            icon: "fa-key"
        }, {
            index: 3,
            name: "测试-4",
            href: "./mainCenter.htm#/main/test4",
            icon: "fa-gears"
        }, {
            index: 4,
            name: "测试-5",
            href: "./mainCenter.htm#/main/test5",
            icon: "fa-upload"
        }, {
            index: 5,
            name: "测试-6",
            href: "./mainCenter.htm#/main/test6",
            icon: "fa-phone"
        }, {
            index: 6,
            name: "测试-7",
            href: "./mainCenter.htm#/main/test7",
            icon: "fa-tasks"
        }
        ]
    },
    'UserCenter': {
        name: "客户管理",
        href: "./userCenter.htm",
        menuItems: [{
            index: 0,
            name: "用户列表",
            href: "./userCenter.htm",
            icon: "fa-group"
        }, {
            index: 1,
            name: "权限管理",
            target: "_blank",
            href: "",
            icon: "fa-gears"
        }]
    },
    'OrderCenter': {
        name: "订单管理",
        href: "orderCenter.htm",
    },
    'PhoneCenter': {
        name: "呼叫中心",
        href: "./phoneCenter.htm",
        menuItems: []
    },
    'ServiceCenter': {
        name: "服务管理",
        href: "",
        menuItems: [{
            index: 0,
            name: "服务列表",
            href: "",
            icon: "fa-group"
        }, {
            index: 1,
            name: "权限管理",
            target: "_blank",
            href: "",
            icon: "fa-gears"
        }]
    },
    'FinanceCenter': {
        name: "财务管理",
        href: "./financeCenter.htm",
        menuItems: [{
            index: 0,
            name: "总账报表",
            href: "./financeCenter.htm#/finance/ledger",
            icon: "fa-group"
        }, {
            index: 1,
            name: "凭证记录",
            target: "_blank",
            href: "./financeCenter.htm#/finance/voucher",
            icon: "fa-gears"
        },
            {
                index: 2,
                name: "工资报表",
                target: "_blank",
                href: "./financeCenter.htm#/finance/wages",
                icon: "fa-plane"
            }]
    },
    'DecisionCenter': {
        name: "决策分析",
        href: "./decisionCenter.htm",
        menuItems: [{
            index: 0,
            name: "成本分析",
            href: "./decisionCenter.htm#/decision/cost",
            icon: "fa-group"
        }, {
            index: 1,
            name: "销售分析",
            target: "_blank",
            href: "./decisionCenter.htm#/decision/sales",
            icon: "fa-plane"
        }, {
            index: 2,
            name: "市场分析",
            target: "_blank",
            href: "./decisionCenter.htm#/decision/market",
            icon: "fa-magnet"
        }]
    },
    'GasCenter': {
        name: "钢瓶管理",
        href: "./gasCenter.htm",
        menuItems: [{
            index: 0,
            name: "钢瓶位置",
            href: "",
            icon: "fa-sitemap"
        }, {
            index: 1,
            name: "门店管理",
            target: "_blank",
            href: "",
            icon: "fa-building"
        }]
    },
    'AppCenter': {
        name: "增值服务",
        href: "./appCenter.htm",
        menuItems: [{
            index: 0,
            name: "便民服务",
            href: "./appCenter.htm#/apps",
            icon: "fa-phone"
        }]
    },
    'HelpCenter': {
        name: "帮助中心",
        href: "",
        target: "_blank"
    }
});


