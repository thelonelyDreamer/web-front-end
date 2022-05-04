package com.axios.controoler;

import com.axios.pojo.ArticleVO;
import org.springframework.web.bind.annotation.*;

/**
 * in order to learn java!
 * created at 2022/5/4 15:20
 *
 * @author felixwc
 */
@RestController
@RequestMapping("/hello")
//@CrossOrigin(value = {"http://localhost:3000"})
public class HelloController {
    @GetMapping("/hi")
    public String test1() {
        return "hi";
    }

    @PostMapping("/post")
    public ArticleVO test2(@RequestBody ArticleVO article) {
        System.out.println(article);
        return article;
    }
    @PutMapping("/put")
    public ArticleVO test3(@RequestBody ArticleVO article) {
        System.out.println(article);
        return article;
    }

    @DeleteMapping("/delete/{id}")
    public String test4(@PathVariable String id){
        return id;
    }
}
