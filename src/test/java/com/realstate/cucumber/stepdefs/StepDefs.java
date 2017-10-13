package com.realstate.cucumber.stepdefs;

import com.realstate.AppRealStateApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = AppRealStateApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
