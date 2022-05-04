package com.axios.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * in order to learn java!
 * created at 2022/5/4 16:03
 *
 * @author felixwc
 */

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*") // 允许跨域的域名，可以用*表示允许任何域名使用
                        .allowedMethods("*") // 允许任何方法（post、get等）
                        .allowedHeaders("*") // 允许任何请求头
                        .exposedHeaders("*")// 暴露哪些原始请求头部信息
                        .maxAge(3600); // maxAge(3600)表明在3600秒内，不需要再发送预检验请求，可以缓存该结果
            }
        };
    }
}