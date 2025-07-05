
package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static CountryService countryService;
    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    public static void main(String[] args) throws Exception {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");
        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
        testFindCountryByCode();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start getAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End getAllCountries");
    }

    private static void testFindCountryByCode() throws Exception {
        LOGGER.info("Start findCountryByCode");
        Country country = countryService.findCountryByCode("IN");
        LOGGER.debug("Country: {}", country);
        LOGGER.info("End findCountryByCode");
    }

    private static void testAddCountry() throws Exception {
        LOGGER.info("Start addCountry");
        Country country = new Country();
        country.setCode("ZZ");
        country.setName("Zootopia");
        countryService.addCountry(country);
        LOGGER.debug("Added Country: {}", countryService.findCountryByCode("ZZ"));
        LOGGER.info("End addCountry");
    }

    private static void testUpdateCountry() throws Exception {
        LOGGER.info("Start updateCountry");
        countryService.updateCountry("ZZ", "Zootopia - Updated");
        LOGGER.debug("Updated Country: {}", countryService.findCountryByCode("ZZ"));
        LOGGER.info("End updateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start deleteCountry");
        countryService.deleteCountry("ZZ");
        LOGGER.info("End deleteCountry");
    }
}
