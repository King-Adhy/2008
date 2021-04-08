<?php
/**
 * Created by PhpStorm.
 * User: 刁秀智
 * Date: 2021/4/7
 * Time: 14:02
 */
//echo "Hello Wodl";
//echo time();
//echo "nihgao";

    $data = [
        "name" => "diaohaoyi",
        "age" => 22,
        "email" => "diaohaoyi@qq.com"
    ];

    //将 数组转为 JSON字符串
    echo json_encode($data);